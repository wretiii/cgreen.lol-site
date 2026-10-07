---
title: "Oregon Cyber Resilience Summit - Vendor Risk Management on a Budget: Free Tools, A Bad Attitude, and Everything Vendors Forget to Mention"
date: 2026-10-07
summary: This talk covered building a third-party risk management program with free tools, including existing vendor assessments, government registries, passive outside-in reconnaissance, breach and leak indexes, and where a budget program stops being enough.
event: "Oregon Cyber Resilience Summit"
location: "Eugene, Oregon"
slides: "/slides/2026-ocrs-tprm-structured-slides.pdf"
topics:
  - Third-party risk management
  - Supply chain security
  - OSINT
  - Vendor assessment

---

# **Existing Vendor Assessments**

<ul style="list-style-type: disc; margin-left: 2em;">
  <li><a href="https://cloudsecurityalliance.org/star/registry">CSA STAR Registry</a></li>
  <li><a href="https://cloudsecurityalliance.org/research/cloud-controls-matrix/">CSA Cloud Controls Matrix (CCM)</a></li>
  <li><a href="https://www.educause.edu/higher-education-community-vendor-assessment-toolkit">HECVAT 4 (Higher Education)</a></li>
  <li><a href="https://www.cosn.org/tools-and-resources/resource/k-12cvat/">K-12 CVAT</a></li>
  <li><a href="https://sharedassessments.org/sig/">Shared Assessments SIG &amp; SIG Lite</a></li>
</ul>

&nbsp;

# **Trust Centers**

<ul style="list-style-type: disc; margin-left: 2em;">
  <li><a href="https://safebase.io/">SafeBase / Drata</a></li>
  <li><a href="https://www.vanta.com/products/trust-center">Vanta Trust Center</a></li>
  <li><a href="https://www.conveyor.com/">Conveyor</a></li>
  <li><a href="https://trustcloud.ai/">TrustCloud</a></li>
</ul>

&nbsp;

# **Cloud Provider Compliance Portals**

<ul style="list-style-type: disc; margin-left: 2em;">
  <li><a href="https://aws.amazon.com/artifact/">AWS Artifact</a></li>
  <li><a href="https://servicetrust.microsoft.com/">Microsoft Service Trust Portal</a></li>
  <li><a href="https://cloud.google.com/security/compliance/compliance-reports-manager">Google Cloud Compliance Reports Manager</a></li>
</ul>

&nbsp;

# **Government Resources**

<ul style="list-style-type: disc; margin-left: 2em;">
  <li><a href="https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final">NIST SP 800-161r1, Cybersecurity Supply Chain Risk Management</a></li>
  <li><a href="https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf">NIST CSF 2.0 (GV.SC)</a></li>
  <li><a href="https://www.cisa.gov/resources-tools/resources/vendor-supply-chain-risk-management-scrm-template">CISA Vendor SCRM Template</a></li>
  <li><a href="https://marketplace.fedramp.gov/">FedRAMP Marketplace</a></li>
  <li><a href="https://govramp.org/program-participants#apl">GovRAMP Authorized Product List</a></li>
</ul>

&nbsp;

# **Vulnerability Intelligence**

<ul style="list-style-type: disc; margin-left: 2em;">
  <li><a href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog">CISA Known Exploited Vulnerabilities (KEV)</a></li>
  <li><a href="https://nvd.nist.gov/">National Vulnerability Database (NVD)</a></li>
  <li><a href="https://www.first.org/epss/">Exploit Prediction Scoring System (EPSS)</a></li>
</ul>

&nbsp;

# **Security Ratings**

<ul style="list-style-type: disc; margin-left: 2em;">
  <li><a href="https://securityscorecard.com/">SecurityScorecard</a></li>
  <li><a href="https://www.bitsight.com/">Bitsight</a></li>
</ul>

&nbsp;

# **TLS, Headers, and Email Authentication**

<ul style="list-style-type: disc; margin-left: 2em;">
  <li><a href="https://www.ssllabs.com/ssltest/">Qualys SSL Labs</a></li>
  <li><a href="https://developer.mozilla.org/en-US/observatory">Mozilla Observatory</a></li>
  <li><a href="https://securityheaders.com/">securityheaders.com</a></li>
  <li><a href="https://www.hardenize.com/">Hardenize</a></li>
</ul>

&nbsp;

# **Internet-Wide Scanners**

<ul style="list-style-type: disc; margin-left: 2em;">
  <li><a href="https://www.shodan.io/">Shodan</a></li>
  <li><a href="https://search.censys.io/">Censys</a></li>
</ul>

&nbsp;

# **Certificate Transparency and DNS Recon**

<ul style="list-style-type: disc; margin-left: 2em;">
  <li><a href="https://crt.sh/">crt.sh (Certificate Transparency search)</a></li>
  <li><a href="https://dnsdumpster.com/">DNSDumpster</a></li>
  <li><a href="https://securitytrails.com/">SecurityTrails</a></li>
  <li><a href="https://viewdns.info/">ViewDNS</a></li>
  <li><a href="https://github.com/elceef/dnstwist">dnstwist</a></li>
</ul>

&nbsp;

# **Subdomain Enumeration**

<ul style="list-style-type: disc; margin-left: 2em;">
  <li><a href="https://github.com/projectdiscovery/subfinder">subfinder</a></li>
  <li><a href="https://github.com/owasp-amass/amass">OWASP Amass</a></li>
  <li><a href="https://github.com/blacklanternsecurity/bbot">BBOT</a></li>
  <li><a href="https://github.com/projectdiscovery/httpx">httpx</a></li>
</ul>

&nbsp;

# **Site History and Fourth-Party Discovery**

<ul style="list-style-type: disc; margin-left: 2em;">
  <li><a href="https://urlscan.io/">urlscan.io</a></li>
  <li><a href="https://web.archive.org/">Wayback Machine</a> (and the <a href="https://github.com/internetarchive/wayback/blob/master/wayback-cdx-server/README.md">CDX Server API</a>)</li>
  <li><a href="https://www.wappalyzer.com/">Wappalyzer</a></li>
  <li><a href="https://builtwith.com/">BuiltWith</a></li>
</ul>

&nbsp;

# **Breach, Infostealer, and Ransomware Indexes**

<ul style="list-style-type: disc; margin-left: 2em;">
  <li><a href="https://haveibeenpwned.com/">Have I Been Pwned</a></li>
  <li><a href="https://www.infostealers.com/">Hudson Rock Infostealers</a></li>
  <li><a href="https://www.ransomware.live/">Ransomware.live</a></li>
  <li><a href="https://intelx.io/">Intelligence X</a></li>
  <li><a href="https://dehashed.com/">DeHashed</a></li>
  <li><a href="https://leak-lookup.com/">Leak-Lookup</a></li>
  <li><a href="https://www.ransomlook.io/">RansomLook</a></li>
</ul>

&nbsp;

# **Secrets in Public Code**

<ul style="list-style-type: disc; margin-left: 2em;">
  <li><a href="https://github.com/search">GitHub code search</a></li>
  <li><a href="https://grep.app/">grep.app</a></li>
  <li><a href="https://github.com/trufflesecurity/trufflehog">trufflehog</a></li>
  <li><a href="https://github.com/gitleaks/gitleaks">gitleaks</a></li>
</ul>

&nbsp;

# **Exposed Storage and Dorking**

<ul style="list-style-type: disc; margin-left: 2em;">
  <li><a href="https://buckets.grayhatwarfare.com/">GrayHatWarfare</a></li>
  <li><a href="https://www.exploit-db.com/google-hacking-database">Google Hacking Database</a></li>
  <li><a href="https://gist.github.com/sundowndev/283efaddbcf896ab405488330d1bbc06">Google Dorking Cheat Sheet</a></li>
</ul>

&nbsp;

# **Standards for Mature Programs**

<ul style="list-style-type: disc; margin-left: 2em;">
  <li><a href="https://www.iso.org/standard/27001">ISO/IEC 27001:2022</a></li>
  <li><a href="https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2">SOC 2 Type II</a></li>
  <li><a href="https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf">NIST CSF 2.0, GV.SC</a></li>
</ul>
