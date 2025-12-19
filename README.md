# AWS Cloud-Native Professional Portfolio 🚀

## 👨‍💻 About Me
I am **Hans Davidson S**, a Computer Science Engineering student at **St. Joseph's College of Engineering** (CGPA: 9.10). I am a passionate problem solver with over **1,500 problems solved on SkillRack** and a deep interest in Cloud Infrastructure and Generative AI.

## 🏗️ Project Architecture
This portfolio is not just a static website; it is a fully deployed cloud solution designed for high availability, security, and global performance.



### 🛠️ AWS Services Used:
* **Amazon S3:** Hosts the static web assets (HTML, CSS, JS) with 99.999999999% durability.
* **Amazon CloudFront:** Acts as a Content Delivery Network (CDN) to serve content from edge locations, reducing latency and providing HTTPS encryption.
* **AWS IAM:** Implemented the "Principle of Least Privilege" using **Origin Access Control (OAC)** and custom **Bucket Policies**.
* **AWS Academy:** Project utilizes foundational knowledge from my AWS Academy Cloud Foundations certification.

## 🌟 Key Features
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.
- **Verified Credentials:** Includes direct links to my **Credly** badges and **SkillRack** profile.
- **Professional Experience:** Showcases my internships at **BSNL** (Telecommunications) and **SynProSoft** (Zoho Premium Partner).
- **Secure Delivery:** Forced HTTPS redirection via CloudFront.
- **Custom Error Handling:** Implemented a custom `error.html` for 404 routing.

## 🚀 How to Deploy This
1.  **S3 Setup:** Create a bucket and upload the root files. Enable Static Website Hosting.
2.  **IAM Policy:** Apply a bucket policy to allow `s3:GetObject` access.
3.  **CloudFront:** Create a distribution pointing to the S3 bucket. Set the Default Root Object to `index.html`.
4.  **Invalidation:** Use `/*` to clear the cache when updating files.

## 🔗 Live Demo
Check out the live site here: **[d2f68vd0ntsjbo.cloudfront.net]**

---
*Developed by Hans Davidson S | 2025*
