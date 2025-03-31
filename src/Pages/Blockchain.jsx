import React from "react";
import Footer from "../components/Footer/Footer";
import Navbarsecondchild from "../components/Navbarsecondchild/Navbarsecondchild";

function Blockchain() {
  return (
    <div>
      <Navbarsecondchild
        navTitle="Blockchain Services"
        navFisrtchild="Our Programs"
        navSecondchild="IT Consulting &amp; Services"
        navSubtitle="Blockchain Services"
      />
      <div className="pagesContainer">
        <p>
          VENIT helps clients explore every aspect of blockchain and build
          tailored solutions designed to deliver value. Through architecture,
          digital design, and development, we serve our clients in their quest
          for innovative blockchain solutions that are market-ready and address
          real business issues.
        </p>
        <p>
          As the leading independent technology organization, we integrate
          alliances, partnerships, and leaders from every aspect of the
          blockchain ecosystem. The goal? To bring the right combination of
          capabilities to your unique infrastructure, challenges, and strategic
          vision.
        </p>

        <p>
          {" "}
          <strong> Experience Platforms and partners </strong>
        </p>

        <ul class="flat-list">
          <li>Sitecore </li>

          <li>Hyperledger Fabric </li>
          <li>Hyperledger Sawtooth </li>
          <li>Stellar </li>
          <li>Ripple </li>
          <li>IBM Blockchain </li>
          <li>ConsenSys Quorum </li>
          <li>Avalanche </li>
          <li>Binance Smart Chain </li>
          <li>Neo </li>
          <li>XDC Network </li>
          <li>BlockApps </li>
          <li>AWS </li>
          <li>AZURE </li>
        </ul>

        <p>
          {" "}
          <strong> Blockchain solutions</strong>
        </p>
        <p>
          Blockchain technology is emerging as a business focus for
          organizations in several industries, including consumer products,
          manufacturing, financial services, health care, life sciences, and
          public sector. VENIT helps companies and organizations achieve many
          goals with respect to blockchain implementation,innovation and
          ideation, strategy development, prototyping, and product development.
        </p>
        <p>
          {" "}
          <strong>
            {" "}
            Our services to guide your blockchain journey include:
          </strong>{" "}
        </p>

        <p>
          {" "}
          <strong> Innovation and ideation</strong>{" "}
        </p>
        <p>
          Continuously identify relevant use cases to harvest the benefits of
          blockchain technologies, collaborate with clients to evaluate existing
          processes, understand pain points, and goals to brainstorm domains for
          blockchain adoption. We, enable clients to grasp the broad innovation
          landscape of blockchain opportunities through our thought leadership
          and growing ecosystem tracking.
        </p>

        <p>
          {" "}
          <strong> Strategy development </strong>{" "}
        </p>
        <p>
          Lead clients in defining blockchain goals and objectives as part of
          their unique journey with a strategic plan to define “where to play
          and how to win”. Craft comprehensive business cases to enable
          executive buy-in to drive business, technology, integration, talent,
          and consortium operating models. Develop strategies to pilot and
          implement blockchain based solutions for prioritized/selected use
          cases.
        </p>

        <p>
          {" "}
          <strong> Prototyping </strong>
        </p>
        <p>
          Accelerate build of blockchain prototypes, leveraging our technical
          expertise, industry knowledge and partnership across platforms, to
          satisfy unique client requirements Leverage our library of over 30
          proof of concept solutions to serve as accelerators across supply
          chain, loyalty, know your customer (KYC), trade finance, identity,
          payments, and more Define an iterative and flexible approach to match
          the rapid changes in the ecosystem
        </p>

        <p>
          {" "}
          <strong> Product development</strong>{" "}
        </p>
        <p>
          Mobilize our highly trained and technical global blockchain
          practitioners to, not only re-engineer business processes, but also
          build applications. Deliver as one team, in partnership, to leverage
          advanced and effective blockchain technology vendor platforms to cater
          to client requirements. Offer our broad set of services, across
          compliance, technology, talent, operations, and tax, to effectively
          integrate your blockchain solution.
        </p>

        <p>
          {" "}
          <strong>What to expect? </strong>{" "}
        </p>
        <ul class="flat-list">
          <li>Immutability.</li>
          <li>Smart contracts.</li>
          <li>Network security.</li>
          <li>Reduce Elimination of fraud.</li>
          <li>Privacy and confidentiality.</li>
          <li>Increased tradability, traceability, and transparency.</li>
          <li>Distributed power, permissionless participation.</li>
          <li>Quality assured results.</li>
          <li>Scalable throughput.</li>
          <li>Flexible workforce.</li>
          <li>API connection.</li>
          <li>Managed Service as well as self service options</li>
        </ul>
        <p>
          We would love to hear from you. Write us at
          <a href="mailto:aravind@venitconsulting.com">
            {" "}
            aravind@venitconsulting.com
          </a>
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Blockchain;
