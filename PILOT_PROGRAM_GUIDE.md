# 60-Day Pilot Program - Implementation Guide

## Overview

This document outlines the complete pilot program funnel for KAKR's infrastructure services (Identity Trust Layer and Blockchain Infrastructure).

## Flow Architecture

```
Pricing Page → /start-pilot → Pilot Qualification Form → 
Internal Review → Pilot Agreement → API Access → Kickoff Call → Integration
```

## Implementation Status

### ✅ Completed

1. **Pricing Page Updates** (`pages/pricing.vue`)
   - Updated hero CTA to link to `/start-pilot`
   - Updated final CTA section to link to `/start-pilot`
   - Maintained separate "Contact Enterprise" flow

2. **Pilot Onboarding Page** (`pages/start-pilot.vue`)
   - Professional dedicated page (not popup)
   - Clean, structured form layout
   - 4-step process visualization
   - Comprehensive qualification form with sections:
     - Company Information
     - Use Case (checkbox goals)
     - Estimated Usage
     - Technical Details
     - Contact Information

3. **API Endpoint** (`server/api/pilot-request.post.ts`)
   - Form submission handler
   - Email notification system
   - Error handling

## Internal Workflow (Post-Submission)

### Step 1: Notification
When a pilot request is submitted:
- Email sent to `contact@kakr.ai`
- **TODO**: Add Slack notification integration
- **TODO**: Add CRM/database entry

### Step 2: Review Criteria
Your team should evaluate:
- **OTP Volume**: Is it substantial enough?
- **Fraud Pain**: Do they have a real security problem?
- **Technical Readiness**: Can they integrate?
- **Company Fit**: Are they a good pilot candidate?

### Step 3: Decision
- ✅ **Approve**: Send pilot agreement
- ❌ **Reject**: Send polite decline email
- ❓ **Questions**: Request additional information

### Step 4: Pilot Agreement
After approval:
- Send pilot agreement PDF or e-sign document (DocuSign/PandaDoc)
- **DO NOT** give API access before signature
- Agreement should include:
  - 60-day evaluation period
  - Usage caps (25,000 verifications OR 50,000 API calls)
  - Terms and conditions
  - Conversion terms

### Step 5: API Access Provisioning

#### Developer Implementation Required

```javascript
// When pilot approved and agreement signed:
const pilotAccount = {
  plan_type: 'identity_pilot' || 'blockchain_pilot',
  verification_cap: 25000,
  api_cap: 50000,
  pilot_start_date: new Date(),
  pilot_end_date: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000), // 60 days
  status: 'active'
}

// System must:
// 1. Track usage against caps
// 2. Prevent overage beyond cap
// 3. Auto-expire access at pilot_end_date unless converted
```

#### Stripe Integration Options

**Option A: $0 Pilot Subscription**
```javascript
const subscription = await stripe.subscriptions.create({
  customer: customerId,
  items: [{ price: 'price_pilot_identity' }], // $0 price
  metadata: {
    pilot_type: 'identity',
    pilot_end_date: pilotEndDate,
    verification_cap: 25000
  }
})
```

**Option B: Internal Plan Flag**
```javascript
// No Stripe subscription, just internal tracking
const account = {
  stripe_customer_id: customerId,
  plan_type: 'pilot',
  pilot_metadata: { ... }
}
```

### Step 6: Onboarding Email
Send email with:
- API keys
- Dashboard access link
- Documentation links
- Kickoff call scheduling link
- Technical contact information

### Step 7: Pilot Lifecycle Management

#### Reminder Schedule
- **Day 45**: "15 days remaining in your pilot"
- **Day 55**: "5 days remaining - let's discuss conversion"
- **Day 60**: Auto-disable access unless converted

#### Conversion Process
When pilot converts to paid:
1. Update account: `plan_type = 'growth' || 'scale' || 'enterprise'`
2. Remove usage caps
3. Create Stripe subscription (if not already)
4. Send welcome email with invoice

## Form Data Structure

```typescript
interface PilotRequest {
  // Company Information
  companyName: string
  website: string
  industry: string
  companySize: '1-10' | '11-50' | '51-200' | '201-500' | '501-1000' | '1000+'
  
  // Use Case
  goals: Array<
    'replace_sms_2fa' | 
    'reduce_phishing' | 
    'prevent_sim_swap' | 
    'secure_ai_agents' | 
    'litecoin_infrastructure' | 
    'privacy_settlement'
  >
  
  // Estimated Usage
  monthlyOTPVolume?: string
  monthlyAPICalls?: string
  currentAuthMethod?: string
  experiencedFraud?: 'yes' | 'no'
  
  // Technical Details
  backendLanguage?: string
  cloudProvider?: string
  deploymentPreference?: 'hosted' | 'private' | 'on-prem'
  
  // Contact
  technicalLeadName: string
  securityContactEmail: string
  phone?: string
}
```

## TODO: Integration Tasks

### High Priority
1. **Email Service**: Update email endpoint to handle pilot requests
   - Current: Uses contact form endpoint
   - Needed: Dedicated pilot request template
   
2. **Notification System**: Add Slack webhook
   ```javascript
   await fetch(process.env.SLACK_PILOT_WEBHOOK, {
     method: 'POST',
     body: JSON.stringify({
       text: `New Pilot Request: ${companyName}`,
       blocks: [/* formatted data */]
     })
   })
   ```

3. **Database/CRM**: Store pilot requests
   - Airtable, Notion, or custom database
   - Track: submission → review → approval → signature → activation

### Medium Priority
4. **Pilot Agreement Template**: Create legal document
5. **E-signature Integration**: DocuSign or PandaDoc
6. **Dashboard Access**: Pilot-specific dashboard view
7. **Usage Tracking**: Real-time cap monitoring

### Low Priority
8. **Analytics**: Track conversion rates
9. **Automated Reminders**: Day 45, 55, 60 emails
10. **Pilot Success Metrics**: Define and track

## Enterprise vs Pilot Separation

### Pilot Flow
- `/start-pilot` → Form → Review → Agreement → API Access
- Self-service qualification
- Controlled evaluation period
- Usage caps enforced

### Enterprise Flow
- `/contact` → Short form → Schedule call → Custom proposal → Enterprise contract
- Sales-led process
- Custom pricing and terms
- Unlimited usage

## Security Considerations

1. **Rate Limiting**: Prevent form spam
2. **Email Validation**: Verify business emails
3. **API Key Security**: Secure generation and storage
4. **Usage Monitoring**: Detect abuse patterns
5. **Data Privacy**: GDPR compliance for form data

## Success Metrics

Track these KPIs:
- Pilot request submissions
- Approval rate
- Time to activation
- Pilot → Paid conversion rate
- Average usage during pilot
- Churn reasons

## Support Resources

- **Documentation**: Link to API docs
- **Technical Support**: pilot-support@kakr.ai
- **Sales Contact**: For conversion discussions
- **Slack Community**: Optional pilot participant channel

---

## Quick Reference

**Pilot Page**: `/start-pilot`  
**API Endpoint**: `/api/pilot-request`  
**Review Email**: `contact@kakr.ai`  
**Duration**: 60 days  
**Caps**: 25k verifications OR 50k API calls  
**Cost**: $0 during evaluation  

---

*Last Updated: 2026-03-02*
