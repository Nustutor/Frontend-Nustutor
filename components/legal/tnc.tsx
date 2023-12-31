import react from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const text = `Acceptance of Terms:
By using Nustutor, you agree to abide by these Terms and Conditions. If you do not agree, please refrain from using Nustutor.
Open Source License:
Nustutor is an open-source application/website. Users are free to view, modify, and distribute the source code in accordance with the open-source license. However, the code is provided with the restriction that it cannot be distributed or used for commercial purposes. It is intended solely for personal, non-commercial use.
User Conduct:
Users must not engage in any activity that disrupts the functionality of Nustutor, violates applicable laws, or infringes on the rights of others.
Data Handling:
Nustutor collects email addresses for communication purposes and may share these email addresses with third-party applications for advertisement purposes. Non-personal information is used for improving user experience. We do not sell personal information.
Cookies and Similar Technologies:
Nustutor may use cookies or similar technologies to enhance user experience. Users have the option to disable cookies in their browser settings.
Restrictions on Commercial Use:
The open-source code of Nustutor is provided with the restriction that it cannot be distributed or used for commercial purposes. It is intended solely for personal, non-commercial use.
Security:
Nustutor employs reasonable measures to secure collected data, including email addresses. Users are encouraged to contribute to the improvement of security features.
Third-Party Services:
Nustutor may integrate with third-party services. This document does not cover the privacy practices of these third parties. Users should review the privacy policies of these third-party services.
Children’s Privacy:
Nustutor is not intended for children under the age of 13. We do not knowingly collect personal information from children.
Changes to Terms and Conditions:
Nustutor may update these Terms and Conditions. Users will be notified of any significant changes. Continued use of Nustutor after such changes constitutes acceptance of the updated Terms and Conditions.
Disclaimer of Warranty:
Nustutor is provided "as is" without any warranties. We do not guarantee that Nustutor will be error-free or uninterrupted.
Limitation of Liability:
We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of the use or inability to use Nustutor.
Contact Information:
If you have any questions or concerns about these Terms and Conditions or Nustutor, please contact us at [nustutor.dev@gmail.com].
By using Nustutor, you agree to the terms outlined in these Terms and Conditions. We appreciate your adherence to these guidelines and hope you have a positive experience with Nustutor.`;

const paragraphs = text.split('\n');
const modifiedText = paragraphs.join('<br/>');
console.log(modifiedText);


const TermsAndConditions = () => {
    return (
        <div className="flex flex-col justify-start bg-white">
            <Navbar/>
            <div className="flex flex-col justify-start items-center flex-grow flex-shrink p-16">
                <h1 className="text-4xl font-bold text-center">Terms And Conditions</h1>
                <div className="flex flex-col justify-start items-start flex-grow flex-shrink p-16">
                    <p className="text-lg"><b>Acceptance of Terms:</b><br/>By using Nustutor, you agree to abide by these Terms and Conditions. If you do not agree, please refrain from using Nustutor.<br/><br/><b>Open Source License:</b><br/>Nustutor is an open-source application/website. Users are free to view, modify, and distribute the source code in accordance with the open-source license. However, the code is provided with the restriction that it cannot be distributed or used for commercial purposes. It is intended solely for personal, non-commercial use.<br/><br/><b>User Conduct:</b><br/>Users must not engage in any activity that disrupts the functionality of Nustutor, violates applicable laws, or infringes on the rights of others.<br/><br/><b>Data Handling:</b><br/>Nustutor collects email addresses for communication purposes and may share these email addresses with third-party applications for advertisement purposes. Non-personal information is used for improving user experience. We do not sell personal information.<br/><br/><b>Cookies and Similar Technologies:</b><br/>Nustutor may use cookies or similar technologies to enhance user experience. Users have the option to disable cookies in their browser settings.<br/><br/><b>Restrictions on Commercial Use:</b><br/>The open-source code of Nustutor is provided with the restriction that it cannot be distributed or used for commercial purposes. It is intended solely for personal, non-commercial use.<br/><br/><b>Security:</b><br/>Nustutor employs reasonable measures to secure collected data, including email addresses. Users are encouraged to contribute to the improvement of security features.<br/><br/><b>Third-Party Services:</b><br/>Nustutor may integrate with third-party services. This document does not cover the privacy practices of these third parties. Users should review the privacy policies of these third-party services.<br/><br/><b>Children’s Privacy:</b><br/>Nustutor is not intended for children under the age of 13. We do not knowingly collect personal information from children.<br/><br/><b>Changes to Terms and Conditions:</b><br/>Nustutor may update these Terms and Conditions. Users will be notified of any significant changes. Continued use of Nustutor after such changes constitutes acceptance of the updated Terms and Conditions.<br/><br/><b>Disclaimer of Warranty:</b><br/>Nustutor is provided "as is" without any warranties. We do not guarantee that Nustutor will be error-free or uninterrupted.<br/><br/><b>Limitation of Liability:</b><br/>We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of the use or inability to use Nustutor.<br/><br/><b>Contact Information:</b><br/>If you have any questions or concerns about these Terms and Conditions or Nustutor, please contact us at [nustutor.dev@gmail.com].<br/><br/>By using Nustutor, you agree to the terms outlined in these Terms and Conditions. We appreciate your adherence to these guidelines and hope you have a positive experience with Nustutor.</p>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default TermsAndConditions;