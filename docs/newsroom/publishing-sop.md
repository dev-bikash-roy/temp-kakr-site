# Publishing, correction, archive and rollback

Written for the content owner. No code, no terminal.

Everything here happens at **https://kakr.ai/admin**. You never need to edit
markdown, frontmatter, configuration files or Vue components.

---

## Signing in

1. Go to **https://kakr.ai/admin**.
2. Click **Login with GitHub**.
3. Sign in with your KAKR GitHub account and complete your two-factor prompt.

Access requires a GitHub account with write access to the content repository. If
you see *"Your GitHub account does not have write access"*, your account has not
been added yet — see `editor-access.md`.

---

## Writing and publishing an article

1. **New Article.** Open **Newsroom articles → New article**.
2. **Fill in the top fields.** Headline, URL slug, Summary, Category.
   - The **URL slug** becomes `kakr.ai/newsroom/<slug>`. Get it right the first
     time: changing it after publication breaks the old link.
   - The **Summary** must be 140–220 characters. The editor tells you if it isn't.
   - **Category** decides which category page the article appears on. If you pick
     **Product Update** you must also set **Availability**.
3. **Upload images.** Hero image (wide, 16:9, ideally 1600×900) and Social sharing
   image (1200×630). Always fill in **Hero image description** — publishing is
   blocked without it, because screen-reader users need it.
4. **Write the article.** Start your section headings at **Heading 2**. The
   headline is already the page's Heading 1. A table of contents appears
   automatically past roughly 1,000 words or four sections.
5. **Add a next step.** Fill in at least the **Primary button**.
6. **Save.** Click **Save**. The article is created as a draft in a review branch
   — nothing is public.
7. **Preview.** Use the **Preview** link in the editor sidebar to see the real
   article page on desktop and mobile, exactly as it will look live.
8. **Send it for review.** Move the editorial workflow column from **Drafts** to
   **In review**, and set the relevant **Approvals** fields as reviewers sign off.
   - Technical and security claims cannot be published until the named technical
     reviewer has approved the exact wording.
   - Compliance, certification, partnership, SLA, custody, Marketplace and
     regulatory claims need the appropriate additional approval.
9. **Publish.** Set **Status** to **Published**, check the **Publish date and
   time**, then move the card to **Ready** and click **Publish**. That merges the
   change and triggers the normal KAKR deployment.

The article is live within a few minutes at `kakr.ai/newsroom/<slug>`, and it
appears simultaneously on the Newsroom, its category page, the RSS feed and the
sitemap.

### Scheduling instead of publishing now

Set **Status** to **Published** and set **Publish date and time (UTC)** to a time
in the future, then publish as above. The article stays invisible — to visitors,
to Google and to the RSS feed — until that moment, then appears on its own within
about five minutes. No developer, no second deployment.

Times are **UTC**. Convert first.

---

## Putting an article on the homepage

Open the article, tick **Feature this on the homepage**, and publish.

- The featured article becomes the large lead card in "Latest from KAKR",
  alongside the two next-newest articles.
- It needs a hero image.
- If more than one article is featured, the one with the lowest **Feature order**
  wins. Untick the previous one to keep things tidy.
- "From the Archive" articles can appear as cards but can never be the lead
  feature.

---

## Changing the announcement bar

The strip across the top of every page.

1. Open the article you want to announce.
2. Open the **Announcement bar** section.
3. Tick **Show this article in the announcement bar**.
4. Set **Badge text** (default `NEW`), optionally a shorter **Bar headline**, and
   **Show from** (required).
5. Publish.

To **replace** the announcement: turn it off on the old article and on for the
new one, or give the new one a higher **Priority**. Only one shows at a time.

To **remove** it: untick **Show this article in the announcement bar** and publish.

Visitors who dismiss the bar stop seeing *that* announcement only. Your next
announcement appears for them normally.

---

## Correcting a live article

1. Open the article in `/admin`.
2. Make the change.
3. Set **Last updated** to now if the change is material — a corrected fact, a
   changed availability label, a reworked section. Skip it for a typo.
4. Save, then publish.

Do **not** change the **URL slug** on a live article. If it genuinely has to
change, ask a developer to add a redirect first.

---

## Unpublishing and archiving

Set **Status** to **Archived** and publish.

The article disappears from the Newsroom, its category page, the homepage, the
announcement bar, the RSS feed, the sitemap and search results. Its full history
stays in version control.

To bring it back, set **Status** to **Published** again.

### "From the Archive" is different

**Show a "From the Archive" banner** keeps an article live with a visible banner
saying it is historical. Use it for older articles whose framing no longer matches
the current product. Fill in the **Archive note** to say what is current instead.

Use **Status: Archived** to take something down. Use **From the Archive** to keep
it up with context.

---

## Rolling back

Rollback goes through version control. Nobody overwrites production content by
hand.

### Undoing your own recent change (self-service)

Open the article in `/admin`, revert the fields to their previous values, and
publish. This is the fastest route for a bad edit and it leaves a clean history.

### Reverting a published change properly (developer, ~2 minutes)

Every publish is one commit on `main` with a message like
`content(newsroom): update "why-every-ai-agent-needs-mission-control"`.

```bash
git log --oneline -- content/newsroom/
git revert --no-edit <commit-sha>
git push origin main
```

The normal deployment pipeline runs and the previous content state is restored.
For several commits, `git revert --no-edit <oldest>^..<newest>`.

### Emergency takedown (fastest possible)

If something must come down **now** and you cannot wait for a review cycle: open
the article in `/admin`, set **Status** to **Archived**, and publish. That removes
it from every public surface on the next deployment. Then sort out the correction
properly.

---

## What the system will refuse to publish

The build blocks a publish — with a specific message — when:

- a required field is missing
- the URL slug does not match the filename, or is a duplicate
- a hero image has no description (alt text)
- a Product Update has no Availability label, or a non-Product-Update has one
- an announcement is enabled on an unpublished or "From the Archive" article
- an announcement has no **Show from** time
- a featured article has no hero image
- a link in the article or a button points at a page that does not exist
- a Related article slug does not exist
- the article body contains a Heading 1

This is deliberate. It is better to see the error in the editor than to publish a
broken page.
