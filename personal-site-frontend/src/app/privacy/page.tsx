/**
 * Privacy Policy page with premium design
 */

"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-screen-2xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4" style={{ color: 'var(--nav-text)' }}>
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </motion.div>

        {/* Privacy Policy Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-xl backdrop-blur-sm border p-8 sm:p-12 shadow-lg" style={{
            backgroundColor: 'var(--about-card-bg)',
            borderColor: 'var(--border)'
          }}>
            <div className="prose prose-lg max-w-none" style={{ color: 'var(--text-primary)' }}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: 'var(--hero-text)' }}>
                Privacy Policy
              </h2>
              
              <p className="mb-6 leading-relaxed">
                Your privacy is important to us. It is OlukunleOwolabi.com's policy to respect your privacy regarding any information we may collect from you across our website, http://OlukunleOwolabi.com.
              </p>

              <p className="mb-6 leading-relaxed">
                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.
              </p>

              <p className="mb-6 leading-relaxed">
                We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
              </p>

              <p className="mb-6 leading-relaxed">
                We don't share any personally identifying information publicly or with third-parties, except when required to by law.
              </p>

              <p className="mb-6 leading-relaxed">
                Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
              </p>

              <p className="mb-6 leading-relaxed">
                You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
              </p>

              <p className="mb-8 leading-relaxed">
                Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
              </p>

              <p className="mb-12 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                This policy is effective as of 22 December 2020.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: 'var(--hero-text)' }}>
                Terms of Service
              </h2>

              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--nav-text)' }}>
                1. Terms
              </h3>
              <p className="mb-6 leading-relaxed">
                By accessing the website at http://OlukunleOwolabi.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
              </p>

              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--nav-text)' }}>
                2. Use License
              </h3>
              <p className="mb-4 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials (information or software) on OlukunleOwolabi.com's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on OlukunleOwolabi.com's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p className="mb-6 leading-relaxed">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by OlukunleOwolabi.com at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>

              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--nav-text)' }}>
                3. Disclaimer
              </h3>
              <p className="mb-6 leading-relaxed">
                The materials on OlukunleOwolabi.com's website are provided on an 'as is' basis. OlukunleOwolabi.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="mb-6 leading-relaxed">
                Further, OlukunleOwolabi.com does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>

              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--nav-text)' }}>
                4. Limitations
              </h3>
              <p className="mb-6 leading-relaxed">
                In no event shall OlukunleOwolabi.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on OlukunleOwolabi.com's website, even if Victor Dibia or a OlukunleOwolabi.com authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>

              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--nav-text)' }}>
                5. Accuracy of materials
              </h3>
              <p className="mb-6 leading-relaxed">
                The materials appearing on OlukunleOwolabi.com's website could include technical, typographical, or photographic errors. OlukunleOwolabi.com does not warrant that any of the materials on its website are accurate, complete or current. OlukunleOwolabi.com may make changes to the materials contained on its website at any time without notice. However OlukunleOwolabi.com does not make any commitment to update the materials.
              </p>

              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--nav-text)' }}>
                6. Links
              </h3>
              <p className="mb-6 leading-relaxed">
                OlukunleOwolabi.com has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by OlukunleOwolabi.com of the site. Use of any such linked website is at the user's own risk.
              </p>

              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--nav-text)' }}>
                7. Modifications
              </h3>
              <p className="mb-6 leading-relaxed">
                OlukunleOwolabi.com may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>

              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--nav-text)' }}>
                8. Governing Law
              </h3>
              <p className="mb-6 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
