import React from 'react';
import { Link } from 'react-router-dom';
import './Help.css'; // Ensure you have a corresponding CSS file for styling

const Help = () => {
  return (
    <div className="help-container">
      <h1>Help & Support</h1>
      <div className="help-section">
        <h2>Navigation Guidelines</h2>
        <p>Welcome to Absolute E-commerce! Here are some tips to help you navigate the platform:</p>
        <ul>
          <li>
            <strong>Home Page:</strong> Find the latest deals, trending products, and top categories. Use the search bar at the top to quickly find specific items.
          </li>
          <li>
            <strong>Product Categories:</strong> Browse products by category from the navigation menu. Each category page displays a range of products, filters, and sorting options.
          </li>
          <li>
            <strong>Product Details:</strong> Click on a product to view detailed information, including descriptions, specifications, reviews, and pricing.
          </li>
          <li>
            <strong>Cart:</strong> Add items to your cart and view them by clicking the cart icon. Adjust quantities or remove items as needed.
          </li>
          <li>
            <strong>Checkout:</strong> Proceed to checkout from your cart. Enter your shipping and payment information to complete your purchase.
          </li>
          <li>
            <strong>Profile:</strong> Access your profile by clicking on your username in the top right corner. View and edit your account details, order history, and saved items.
          </li>
        </ul>
      </div>
      <div className="help-section">
        <h2>Contact Us</h2>
        <p>If you need further assistance, feel free to reach out to our customer support team. We're here to help!</p>
        <Link to="helpcenter/contact/" className="btn btn-primary">Contact Center</Link>
      </div>
      <h1>Terms and Conditions</h1>
      <p>Welcome to Absolute E-commerce. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Absolute E-commerce if you do not agree to all of the terms and conditions stated on this page.</p>

      <p>These terms and conditions outline the rules and regulations for the use of Absolute E-commerce's Website, located at www.absoluteecommerce.com.</p>

      <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Absolute E-commerce if you do not agree to take all of the terms and conditions stated on this page.</p>

      <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

      <h2>Cookies</h2>

      <p>We employ the use of cookies. By accessing Absolute E-commerce, you agreed to use cookies in agreement with the Absolute E-commerce's Privacy Policy.</p>

      <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

      <h2>License</h2>

      <p>Unless otherwise stated, Absolute E-commerce and/or its licensors own the intellectual property rights for all material on Absolute E-commerce. All intellectual property rights are reserved. You may access this from Absolute E-commerce for your own personal use subjected to restrictions set in these terms and conditions.</p>

      <p>You must not:</p>

      <ul>
        <li>Republish material from Absolute E-commerce</li>
        <li>Sell, rent or sub-license material from Absolute E-commerce</li>
        <li>Reproduce, duplicate or copy material from Absolute E-commerce</li>
        <li>Redistribute content from Absolute E-commerce</li>
      </ul>

      <p>This Agreement shall begin on the date hereof.</p>

      <h2>Hyperlinking to our Content</h2>

      <p>The following organizations may link to our Website without prior written approval:</p>

      <ol>
        <li>Government agencies</li>
        <li>Search engines</li>
        <li>News organizations</li>
        <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
        <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
      </ol>

      <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>

      <p>We may consider and approve other link requests from the following types of organizations:</p>

      <ul>
        <li>commonly-known consumer and/or business information sources;</li>
        <li>dot.com community sites;</li>
        <li>associations or other groups representing charities;</li>
        <li>online directory distributors;</li>
        <li>internet portals;</li>
        <li>accounting, law and consulting firms; and</li>
        <li>educational institutions and trade associations.</li>
      </ul>

      <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Absolute E-commerce; and (d) the link is in the context of general resource information.</p>

      <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</p>

      <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Absolute E-commerce. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>

      <p>Approved organizations may hyperlink to our Website as follows:</p>

      <ol>
        <li>By use of our corporate name; or</li>
        <li>By use of the uniform resource locator being linked to; or</li>
        <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
      </ol>

      <p>No use of Absolute E-commerce's logo or other artwork will be allowed for linking absent a trademark license agreement.</p>

      <h2>iFrames</h2>

      <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

      <h2>Content Liability</h2>

      <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>

      <h2>Your Privacy</h2>

      <p>Please read Privacy Policy</p>

      <h2>Reservation of Rights</h2>

      <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

      <h2>Removal of links from our website</h2>

      <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>

      <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>

      <h2>Disclaimer</h2>

      <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>

      <ol>
        <li>limit or exclude our or your liability for death or personal injury;</li>
        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
      </ol>

      <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>

      <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>

    </div>
  );
};

export default Help;
