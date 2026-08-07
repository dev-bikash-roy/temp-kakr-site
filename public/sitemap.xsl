<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="s">
  
  <xsl:output method="html" encoding="UTF-8" indent="yes" />
  
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>Sitemap - Kakr Labs</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!-- Custom Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;family=JetBrains+Mono:wght@400;500;700&amp;display=swap" rel="stylesheet" />
        <style>
          /* CSS Variables and Theme Reset */
          :root {
            --bg-page: #0a0a0a;
            --bg-surface: #0f111a;
            --bg-surface-raised: #151824;
            --border-color: rgba(255, 255, 255, 0.06);
            --border-hover: rgba(16, 185, 129, 0.35);
            --text-primary: #ffffff;
            --text-secondary: rgba(255, 255, 255, 0.7);
            --text-muted: rgba(255, 255, 255, 0.4);
            --brand-green: #10b981;
            --brand-cyan: #06b6d4;
            --brand-glow: rgba(16, 185, 129, 0.15);
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            background-color: var(--bg-page);
            background-image:
              radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
            background-attachment: fixed;
            color: var(--text-primary);
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            line-height: 1.5;
            padding: 40px 20px;
            min-height: 100vh;
          }

          .container {
            max-width: 1100px;
            margin: 0 auto;
          }

          /* Header Section */
          header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: rgba(15, 17, 26, 0.75);
            backdrop-filter: blur(16px);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 24px 32px;
            margin-bottom: 24px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          }

          .header-left {
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .logo {
            height: 48px;
            width: auto;
            object-fit: contain;
          }

          .title-area h1 {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: -0.02em;
            background: linear-gradient(135deg, var(--brand-cyan) 0%, var(--brand-green) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 4px;
          }

          .title-area p {
            color: var(--text-secondary);
            font-size: 13px;
          }

          .stat-card {
            background: var(--bg-surface-raised);
            border: 1px solid var(--border-color);
            padding: 10px 18px;
            border-radius: 10px;
            text-align: right;
          }

          .stat-card .value {
            font-family: 'JetBrains Mono', monospace;
            font-size: 20px;
            font-weight: 700;
            color: var(--brand-green);
          }

          .stat-card .label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-muted);
          }

          /* Controls Block */
          .controls {
            background: rgba(15, 17, 26, 0.5);
            backdrop-filter: blur(16px);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 16px;
            margin-bottom: 24px;
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            align-items: center;
            justify-content: space-between;
          }

          .search-wrapper {
            position: relative;
            flex: 1;
            min-width: 280px;
          }

          .search-wrapper svg {
            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
            width: 16px;
            height: 16px;
            fill: var(--text-muted);
            pointer-events: none;
            transition: fill 0.25s ease;
          }

          .search-input {
            width: 100%;
            background: var(--bg-surface-raised);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 11px 16px 11px 40px;
            color: var(--text-primary);
            font-family: inherit;
            font-size: 13px;
            transition: all 0.25s ease;
          }

          .search-input:focus {
            outline: none;
            border-color: var(--brand-green);
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
          }

          .search-input:focus + svg {
            fill: var(--brand-green);
          }

          .filter-tabs {
            display: flex;
            gap: 8px;
          }

          .filter-tab {
            background: var(--bg-surface-raised);
            border: 1px solid var(--border-color);
            color: var(--text-secondary);
            padding: 8px 14px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 12px;
            font-weight: 500;
            transition: all 0.2s ease;
          }

          .filter-tab:hover {
            color: var(--text-primary);
            border-color: rgba(255,255,255,0.15);
          }

          .filter-tab.active {
            background: var(--brand-green);
            color: #000;
            border-color: var(--brand-green);
            font-weight: 600;
          }

          /* Sitemap Table Grid */
          .table-container {
            background: rgba(15, 17, 26, 0.75);
            backdrop-filter: blur(16px);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
            margin-bottom: 24px;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
          }

          th {
            background: rgba(255, 255, 255, 0.02);
            padding: 16px 24px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-muted);
            border-bottom: 1px solid var(--border-color);
          }

          td {
            padding: 16px 24px;
            border-bottom: 1px solid var(--border-color);
            vertical-align: middle;
          }

          tr:last-child td {
            border-bottom: none;
          }

          tr {
            transition: background-color 0.2s ease;
          }

          tr:hover {
            background-color: rgba(255, 255, 255, 0.015);
          }

          /* Cell Styling */
          .cell-loc a {
            color: var(--brand-cyan);
            text-decoration: none;
            font-family: 'JetBrains Mono', monospace;
            font-size: 13.5px;
            transition: color 0.2s ease;
            display: inline-block;
            max-width: 600px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .cell-loc a:hover {
            color: var(--brand-green);
            text-decoration: underline;
          }

          /* Badges */
          .badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.02em;
          }

          .badge-priority-high {
            background: rgba(16, 185, 129, 0.1);
            color: #34d399;
            border: 1px solid rgba(16, 185, 129, 0.2);
          }

          .badge-priority-med {
            background: rgba(6, 182, 212, 0.1);
            color: #22d3ee;
            border: 1px solid rgba(6, 182, 212, 0.2);
          }

          .badge-priority-low {
            background: rgba(148, 163, 184, 0.1);
            color: #94a3b8;
            border: 1px solid rgba(148, 163, 184, 0.2);
          }

          .badge-freq-daily {
            background: rgba(245, 158, 11, 0.1);
            color: #fbbf24;
            border: 1px solid rgba(245, 158, 11, 0.2);
          }

          .badge-freq-weekly {
            background: rgba(139, 92, 246, 0.1);
            color: #a78bfa;
            border: 1px solid rgba(139, 92, 246, 0.2);
          }

          .badge-freq-monthly {
            background: rgba(59, 130, 246, 0.1);
            color: #60a5fa;
            border: 1px solid rgba(59, 130, 246, 0.2);
          }

          .badge-freq-yearly {
            background: rgba(100, 116, 139, 0.1);
            color: #94a3b8;
            border: 1px solid rgba(100, 116, 139, 0.2);
          }

          .date-text {
            color: var(--text-secondary);
            font-family: 'JetBrains Mono', monospace;
            font-size: 12.5px;
          }

          /* Footer */
          footer {
            text-align: center;
            padding: 20px 0 40px 0;
            color: var(--text-muted);
            font-size: 12px;
          }

          footer a {
            color: var(--text-secondary);
            text-decoration: none;
            transition: color 0.2s ease;
          }

          footer a:hover {
            color: var(--brand-green);
          }

          /* Empty State */
          .empty-state {
            padding: 48px;
            text-align: center;
            color: var(--text-secondary);
            font-size: 15px;
            display: none;
          }

          /* Mobile styling */
          @media (max-width: 768px) {
            body {
              padding: 20px 12px;
            }

            header {
              flex-direction: column;
              text-align: center;
              padding: 24px;
              gap: 20px;
            }

            .header-left {
              flex-direction: column;
              gap: 16px;
            }

            .stat-card {
              text-align: center;
              width: 100%;
            }

            .controls {
              flex-direction: column;
              align-items: stretch;
            }

            .filter-tabs {
              justify-content: center;
              flex-wrap: wrap;
            }

            th, td {
              padding: 12px 14px;
            }

            .cell-loc a {
              max-width: 250px;
            }
            
            .hide-mobile {
              display: none !important;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Render Header -->
          <header>
            <div class="header-left">
              <img src="/kakrlabs-logo.png" alt="Kakr Labs Logo" class="logo" />
              <div class="title-area">
                <xsl:choose>
                  <xsl:when test="s:sitemapindex">
                    <h1>Sitemap Index</h1>
                    <p>This is the primary sitemap index serving multiple sitemap partitions.</p>
                  </xsl:when>
                  <xsl:otherwise>
                    <h1>XML Sitemap</h1>
                    <p>This XML Sitemap contains the structured URLs for crawling and indexing by search engines.</p>
                  </xsl:otherwise>
                </xsl:choose>
              </div>
            </div>
            <div class="stat-card">
              <div class="value" id="total-count">
                <xsl:choose>
                  <xsl:when test="s:sitemapindex">
                    <xsl:value-of select="count(s:sitemapindex/s:sitemap)" />
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:value-of select="count(s:urlset/s:url)" />
                  </xsl:otherwise>
                </xsl:choose>
              </div>
              <div class="label">
                <xsl:choose>
                  <xsl:when test="s:sitemapindex">Total Sitemaps</xsl:when>
                  <xsl:otherwise>Total URLs</xsl:otherwise>
                </xsl:choose>
              </div>
            </div>
          </header>

          <!-- Render Search and Controls (Only for regular sitemaps) -->
          <xsl:if test="s:urlset">
            <div class="controls">
              <div class="search-wrapper">
                <input type="text" id="search-input" class="search-input" placeholder="Search and filter URLs..." onkeyup="filterSitemap()" />
                <svg viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </div>
              <div class="filter-tabs">
                <button class="filter-tab active" onclick="setFilter('all', this)">All</button>
                <button class="filter-tab" onclick="setFilter('high', this)">High Priority</button>
                <button class="filter-tab" onclick="setFilter('weekly', this)">Weekly</button>
                <button class="filter-tab" onclick="setFilter('daily', this)">Daily</button>
              </div>
            </div>
          </xsl:if>

          <!-- Table Container -->
          <div class="table-container">
            <xsl:choose>
              <!-- Sitemap Index View -->
              <xsl:when test="s:sitemapindex">
                <table id="sitemap-table">
                  <thead>
                    <tr>
                      <th style="width: 70%;">Sitemap Path</th>
                      <th style="width: 30%;">Last Modified</th>
                    </tr>
                  </thead>
                  <tbody>
                    <xsl:for-each select="s:sitemapindex/s:sitemap">
                      <tr>
                        <td class="cell-loc">
                          <a href="{s:loc}"><xsl:value-of select="s:loc" /></a>
                        </td>
                        <td>
                          <xsl:choose>
                            <xsl:when test="s:lastmod">
                              <span class="date-text"><xsl:value-of select="s:lastmod" /></span>
                            </xsl:when>
                            <xsl:otherwise>
                              <span class="date-text" style="color: var(--text-muted);">—</span>
                            </xsl:otherwise>
                          </xsl:choose>
                        </td>
                      </tr>
                    </xsl:for-each>
                  </tbody>
                </table>
              </xsl:when>

              <!-- Regular Sitemap View -->
              <xsl:otherwise>
                <table id="sitemap-table">
                  <thead>
                    <tr>
                      <th style="width: 55%;">URL Address</th>
                      <th style="width: 15%; text-align: center;">Priority</th>
                      <th style="width: 15%; text-align: center;" class="hide-mobile">Frequency</th>
                      <th style="width: 15%;" class="hide-mobile">Last Mod</th>
                    </tr>
                  </thead>
                  <tbody>
                    <xsl:for-each select="s:urlset/s:url">
                      <!-- Extract and normalize priority -->
                      <xsl:variable name="prio">
                        <xsl:choose>
                          <xsl:when test="s:priority"><xsl:value-of select="s:priority" /></xsl:when>
                          <xsl:otherwise>0.5</xsl:otherwise>
                        </xsl:choose>
                      </xsl:variable>
                      
                      <!-- Extract change freq -->
                      <xsl:variable name="freq">
                        <xsl:choose>
                          <xsl:when test="s:changefreq"><xsl:value-of select="s:changefreq" /></xsl:when>
                          <xsl:otherwise>weekly</xsl:otherwise>
                        </xsl:choose>
                      </xsl:variable>

                      <tr class="sitemap-row" data-url="{s:loc}" data-priority="{$prio}" data-freq="{$freq}">
                        <td class="cell-loc">
                          <a href="{s:loc}"><xsl:value-of select="s:loc" /></a>
                        </td>
                        <td style="text-align: center;">
                          <xsl:choose>
                            <xsl:when test="$prio &gt;= 0.9">
                              <span class="badge badge-priority-high"><xsl:value-of select="$prio" /></span>
                            </xsl:when>
                            <xsl:when test="$prio &gt;= 0.7">
                              <span class="badge badge-priority-med"><xsl:value-of select="$prio" /></span>
                            </xsl:when>
                            <xsl:otherwise>
                              <span class="badge badge-priority-low"><xsl:value-of select="$prio" /></span>
                            </xsl:otherwise>
                          </xsl:choose>
                        </td>
                        <td style="text-align: center;" class="hide-mobile">
                          <span class="badge badge-freq-{$freq}"><xsl:value-of select="$freq" /></span>
                        </td>
                        <td class="hide-mobile">
                          <xsl:choose>
                            <xsl:when test="s:lastmod">
                              <span class="date-text"><xsl:value-of select="s:lastmod" /></span>
                            </xsl:when>
                            <xsl:otherwise>
                              <span class="date-text" style="color: var(--text-muted);">—</span>
                            </xsl:otherwise>
                          </xsl:choose>
                        </td>
                      </tr>
                    </xsl:for-each>
                  </tbody>
                </table>
                <div id="empty-state" class="empty-state">
                  No matching URLs found.
                </div>
              </xsl:otherwise>
            </xsl:choose>
          </div>

          <!-- Footer -->
          <footer>
            <p>Generated by <a href="https://kakr.ai">Kakr Labs</a>. Learn more about our secure Web3 infrastructure on the <a href="https://kakr.ai/platform">platform page</a>.</p>
          </footer>
        </div>

        <!-- Filter and Search Script -->
        <script type="text/javascript">
          // <![CDATA[
          let currentFilter = 'all';
          
          function filterSitemap() {
            const query = document.getElementById('search-input').value.toLowerCase();
            const rows = document.querySelectorAll('.sitemap-row');
            let visibleCount = 0;

            rows.forEach(row => {
              const url = row.getAttribute('data-url').toLowerCase();
              const priority = parseFloat(row.getAttribute('data-priority'));
              const freq = row.getAttribute('data-freq').toLowerCase();

              const matchesSearch = url.includes(query);
              let matchesFilter = true;

              if (currentFilter === 'high') {
                matchesFilter = priority >= 0.9;
              } else if (currentFilter === 'weekly') {
                matchesFilter = freq === 'weekly';
              } else if (currentFilter === 'daily') {
                matchesFilter = freq === 'daily';
              }

              if (matchesSearch && matchesFilter) {
                row.style.display = '';
                visibleCount++;
              } else {
                row.style.display = 'none';
              }
            });

            // Update visible counter badge
            document.getElementById('total-count').textContent = visibleCount;
            
            // Empty state display
            const emptyState = document.getElementById('empty-state');
            if (emptyState) {
              emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
            }
          }

          function setFilter(filterType, element) {
            currentFilter = filterType;
            
            // Update active class
            document.querySelectorAll('.filter-tab').forEach(tab => {
              tab.classList.remove('active');
            });
            element.classList.add('active');
            
            filterSitemap();
          }
          // ]]>
        </script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
