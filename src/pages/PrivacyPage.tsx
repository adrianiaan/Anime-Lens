
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, Trash2 } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full w-fit mx-auto mb-6">
            <Shield className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-purple-100">
            Your privacy and data protection are our top priorities
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Quick Summary */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Privacy at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Eye className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-blue-900">What We Collect</h3>
                <p className="text-sm text-blue-800">Images you upload for analysis and basic usage data</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Lock className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-blue-900">How We Protect</h3>
                <p className="text-sm text-blue-800">End-to-end encryption and secure data handling</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Trash2 className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-blue-900">Data Retention</h3>
                <p className="text-sm text-blue-800">Images deleted within 24 hours of processing</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-blue-900">Your Rights</h3>
                <p className="text-sm text-blue-800">Full control over your data and privacy settings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          
          <div className="mb-8">
            <p className="text-gray-600 text-base">
              <strong>Last updated:</strong> January 15, 2024
            </p>
            <p className="text-gray-600">
              This Privacy Policy explains how AnimeLens ("we," "our," or "us") collects, uses, and protects 
              your information when you use our anime detection service.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Images and Visual Content</h3>
            <p className="text-gray-600 mb-4">
              When you use our anime detection service, we temporarily process the images you upload. 
              These images are used solely for the purpose of identifying anime content and are automatically 
              deleted from our servers within 24 hours of processing.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Data</h3>
            <p className="text-gray-600 mb-4">
              We collect basic usage information including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li>Number of images processed</li>
              <li>API response times and accuracy metrics</li>
              <li>Basic device and browser information</li>
              <li>IP addresses (anonymized after 30 days)</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Information</h3>
            <p className="text-gray-600">
              If you create an account for API access, we collect your email address and basic account 
              preferences. This information is used for account management and service communication only.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Service Provision:</strong> To analyze your images and provide anime identification results</li>
              <li><strong>Service Improvement:</strong> To enhance our AI models and improve detection accuracy</li>
              <li><strong>Technical Support:</strong> To troubleshoot issues and provide customer support</li>
              <li><strong>Security:</strong> To prevent abuse and ensure service reliability</li>
              <li><strong>Communication:</strong> To send important service updates and notifications</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Protection and Security</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Encryption</h3>
            <p className="text-gray-600 mb-4">
              All data transmission to and from our servers is encrypted using industry-standard TLS encryption. 
              Images are processed in secure, isolated environments and are never stored permanently.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Access Controls</h3>
            <p className="text-gray-600 mb-4">
              Access to user data is strictly limited to authorized personnel who require it for service 
              operation and improvement. All access is logged and monitored.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Minimization</h3>
            <p className="text-gray-600">
              We collect and retain only the minimum amount of data necessary to provide our service effectively. 
              Personal data is anonymized whenever possible.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Retention and Deletion</h2>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Image Data</h3>
              <p className="text-green-800">
                <strong>Automatic Deletion:</strong> All uploaded images are automatically deleted from our servers 
                within 24 hours of processing, regardless of whether analysis was successful.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Data Types</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Usage Analytics:</strong> Retained for up to 12 months for service improvement</li>
              <li><strong>Account Data:</strong> Retained until account deletion is requested</li>
              <li><strong>Support Communications:</strong> Retained for up to 2 years for quality assurance</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              We use select third-party services to operate our platform:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Cloud Infrastructure:</strong> For secure image processing and storage</li>
              <li><strong>Analytics Services:</strong> For understanding service usage (anonymized data only)</li>
              <li><strong>Payment Processing:</strong> For handling API subscription payments (we don't store payment details)</li>
            </ul>
            <p className="text-gray-600 mt-4">
              All third-party services are carefully vetted and comply with strict data protection standards.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Access and Control</h3>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Request access to your personal data</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Delete your account and associated data</li>
              <li>Opt out of non-essential communications</li>
              <li>Request data portability where applicable</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookie Preferences</h3>
            <p className="text-gray-600">
              We use minimal, essential cookies for service functionality. You can control cookie preferences 
              through your browser settings, though disabling cookies may limit some features.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. International Data Transfers</h2>
            <p className="text-gray-600">
              Our primary data processing occurs in secure facilities in Japan and the United States. 
              If data is transferred internationally, we ensure appropriate safeguards are in place, 
              including standard contractual clauses and adequacy decisions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-600">
              Our service is not directed at children under 13 years of age. We do not knowingly collect 
              personal information from children under 13. If we become aware that we have collected 
              personal information from a child under 13, we will take steps to delete such information promptly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time to reflect changes in our practices or 
              legal requirements. We will notify users of any significant changes via email or through 
              our service. Continued use of our service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@animelens.com</p>
              <p className="text-gray-700 mb-2"><strong>Response Time:</strong> Within 48 hours</p>
              <p className="text-gray-700"><strong>Data Protection Officer:</strong> Available upon request</p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
