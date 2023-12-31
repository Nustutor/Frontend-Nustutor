import react from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const Privacy = () => {
    return (
        <div className="flex flex-col justify-start bg-white">
            <Navbar/>
            <div className="flex flex-col justify-start items-center flex-grow flex-shrink p-16">
                <h1 className="text-4xl font-bold text-center">Privacy Policy</h1>
                <div className="flex flex-col justify-start items-start flex-grow flex-shrink p-16">
                    <p className="text-lg">Thank you for using Nustutor, an open-source application/website designed for educational purposes. This Privacy Policy is intended to inform you about the types of information we may collect, how we use that information, and the choices you have regarding your information. Please read this Privacy Policy carefully before using Nustutor.
<br/><br/>
1. <b>Information We Collect:</b>
<br/><br/>
a. Personal Information:
<br/><br/>
Nustutor collects email addresses for communication purposes and may share these email addresses with third-party applications for advertisement purposes. Users voluntarily provide these emails, and they may be used for targeted advertising.
<br/>b. Non-Personal Information:
<br/><br/>
Nustutor may collect non-personal information, such as device information, browser type, language preference, and other anonymous usage data.
<br/><br/><b>2. How We Use Information:</b>
<br/><br/>
a. Personal Information:
<br/><br/>
Email addresses are used for communication purposes, such as sending updates, notifications, and may be shared with third-party applications for targeted advertising. We do not sell email addresses.
<br/><br/>b. Non-Personal Information:
<br/><br/>
Non-personal information is used for the sole purpose of improving the user experience and functionality of Nustutor.
<br/><br/><b>3. Cookies and Similar Technologies:</b>
<br/><br/>
Nustutor may use cookies or similar technologies to enhance the user experience. Users have the option to disable cookies in their browser settings.
<br/><br/><b>4. Open Source Nature and Usage Restrictions:</b>
<br/><br/>
Nustutor is an open-source application/website. However, the open-source code is provided with the restriction that it cannot be distributed or used for commercial purposes. It is intended solely for personal use.
<br/><br/><b>5. Data Security:</b>
<br/><br/>
We take reasonable measures to secure the data collected, including email addresses. Users are encouraged to contribute to the improvement of security features.
<br/><br/><b>6. Third-Party Services:</b>
<br/><br/>
Nustutor may share email addresses with third-party applications for advertisement purposes. This Privacy Policy does not cover the privacy practices of these third parties. Users should review the privacy policies of these third-party services.
<br/><br/><b>7. Children’s Privacy:</b>
<br/><br/>
Nustutor is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe that we may have collected information from a child, please contact us.
<br/><br/><b>8. Changes to this Privacy Policy:</b>
<br/><br/>
Nustutor may update this Privacy Policy from time to time. Users will be notified of any significant changes. Continued use of Nustutor after such changes constitutes acceptance of the updated Privacy Policy.
<br/><br/><b>9. Contact Information:</b>
<br/><br/>
If you have any questions or concerns about this Privacy Policy or Nustutor, please contact us at [nustutor.dev@gmail.com].
By using Nustutor and providing your email address, you agree to the terms outlined in this Privacy Policy. We appreciate your trust in us and are committed to maintaining the privacy and security of your information.</p>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Privacy;