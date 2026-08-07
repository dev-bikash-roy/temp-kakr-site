# Deployment Guide

## Google Cloud Deployment

### Prerequisites
- Google Cloud account with billing enabled
- gcloud CLI installed and configured
- Docker installed locally (for testing)

### Option 1: Deploy to Cloud Run (Recommended)

Cloud Run is serverless and scales automatically based on traffic.

#### Initial Setup

```bash
# 1. Set your project ID
gcloud config set project YOUR_PROJECT_ID

# 2. Enable required APIs
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable containerregistry.googleapis.com

# 3. Build and deploy using Cloud Build
gcloud builds submit --config cloudbuild.yaml

# 4. (Optional) Set up custom domain
gcloud run services update kakr-website \
  --region us-central1 \
  --platform managed \
  --add-cloudsql-instances YOUR_INSTANCE
```

#### Manual Deployment (Alternative)

```bash
# 1. Build Docker image locally
docker build -t gcr.io/YOUR_PROJECT_ID/kakr-website .

# 2. Push to Google Container Registry
docker push gcr.io/YOUR_PROJECT_ID/kakr-website

# 3. Deploy to Cloud Run
gcloud run deploy kakr-website \
  --image gcr.io/YOUR_PROJECT_ID/kakr-website \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 3000 \
  --set-env-vars SITE_URL=https://www.kakr.ai,NODE_ENV=production
```

### Option 2: Deploy to Google Kubernetes Engine (GKE)

For more control and complex infrastructure needs.

```bash
# 1. Create GKE cluster
gcloud container clusters create kakr-cluster \
  --num-nodes=3 \
  --zone=us-central1-a

# 2. Build and push image
docker build -t gcr.io/YOUR_PROJECT_ID/kakr-website .
docker push gcr.io/YOUR_PROJECT_ID/kakr-website

# 3. Deploy to GKE
kubectl create deployment kakr-website \
  --image=gcr.io/YOUR_PROJECT_ID/kakr-website

# 4. Expose service
kubectl expose deployment kakr-website \
  --type=LoadBalancer \
  --port=80 \
  --target-port=3000
```

### Option 3: Deploy to Compute Engine

For traditional VM-based deployment.

```bash
# 1. Create VM instance
gcloud compute instances create kakr-website-vm \
  --image-family=cos-stable \
  --image-project=cos-cloud \
  --machine-type=e2-medium \
  --zone=us-central1-a

# 2. SSH into instance and run Docker container
gcloud compute ssh kakr-website-vm --zone=us-central1-a

# On the VM:
docker pull gcr.io/YOUR_PROJECT_ID/kakr-website
docker run -d -p 80:3000 \
  -e SITE_URL=https://www.kakr.ai \
  -e NODE_ENV=production \
  gcr.io/YOUR_PROJECT_ID/kakr-website
```

## Environment Variables

Set these environment variables in your Google Cloud deployment:

- `SITE_URL`: Your production domain (e.g., https://www.kakr.ai)
- `NODE_ENV`: Set to "production"

### Setting Environment Variables in Cloud Run

```bash
gcloud run services update kakr-website \
  --region us-central1 \
  --set-env-vars SITE_URL=https://www.kakr.ai,NODE_ENV=production
```

## Custom Domain Setup

### For Cloud Run

```bash
# 1. Map custom domain
gcloud run domain-mappings create \
  --service kakr-website \
  --domain www.kakr.ai \
  --region us-central1

# 2. Follow the instructions to update DNS records
```

## CI/CD with Cloud Build

The included `cloudbuild.yaml` enables automatic deployments:

1. Connect your GitHub/GitLab repository to Cloud Build
2. Create a trigger for your main branch
3. Every push will automatically build and deploy

```bash
# Create a build trigger
gcloud builds triggers create github \
  --repo-name=YOUR_REPO \
  --repo-owner=YOUR_ORG \
  --branch-pattern="^main$" \
  --build-config=cloudbuild.yaml
```

## Testing Locally

Test the Docker container before deploying:

```bash
# Build
docker build -t kakr-website .

# Run locally
docker run -p 3000:3000 \
  -e SITE_URL=http://localhost:3000 \
  -e NODE_ENV=development \
  kakr-website

# Visit http://localhost:3000
```

## Migration Checklist

- [ ] Test Docker build locally
- [ ] Set up Google Cloud project
- [ ] Enable required APIs
- [ ] Deploy to staging environment first
- [ ] Test all functionality on staging
- [ ] Set up custom domain
- [ ] Update DNS records
- [ ] Monitor logs and performance
- [ ] Update Vercel to redirect (optional)
- [ ] Decommission Vercel deployment

## Monitoring & Logs

```bash
# View Cloud Run logs
gcloud run services logs read kakr-website \
  --region us-central1 \
  --limit 50

# Stream logs in real-time
gcloud run services logs tail kakr-website \
  --region us-central1
```

## Cost Optimization

- Cloud Run charges only for actual usage (requests)
- Set min instances to 0 for cost savings
- Set max instances to control costs
- Use Cloud CDN for static assets

```bash
# Configure scaling
gcloud run services update kakr-website \
  --region us-central1 \
  --min-instances 0 \
  --max-instances 10 \
  --concurrency 80
```

## Rollback

If issues occur, rollback to previous revision:

```bash
# List revisions
gcloud run revisions list --service kakr-website --region us-central1

# Rollback to specific revision
gcloud run services update-traffic kakr-website \
  --region us-central1 \
  --to-revisions REVISION_NAME=100
```

## Support

For issues or questions:
- Google Cloud Documentation: https://cloud.google.com/run/docs
- Nuxt.js Documentation: https://nuxt.com/docs
