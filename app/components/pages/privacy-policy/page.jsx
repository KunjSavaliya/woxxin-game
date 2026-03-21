"use client";
import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

const sections = [
    {
        id: "who",
        title: "Who we are?",
        content: (
            <>

                Woxxin Solutions (a company registered in India (registration number U72200GJ2019PTC107596), whose registered office is at SHOP 128,1ST FLOOR,SY.NO.2111 TPS-24 FP-34.OPP.AKHAND ANAND COLLEGE, VED ROAD Surat, Gujarat, India 395004) is the data controller of the personal information that we collect from you. Woxxin Solution are referred to in this Privacy Policy as “Woxxin Solution”, “us”, “we” or “our”. <br /><br />
                <span>  We are committed to providing fun and exciting digital entertainment. This Privacy Policy explains how and what personal data relating to you
                    we may use in relation to our main website{" "}

                    <a href="https://woxxin.com/" className="text-blue-500 underline hover:text-blue-700">
                        woxxin.com
                    </a>

                    , or through our other dedicated websites such as{" "}

                    <a href="https://woxxingames.com/" className="text-blue-500 underline hover:text-blue-700">
                        woxxingames.com
                    </a>

                    , or any other sites which may be offered by us from time to time.(“websites”)any of our mobile applications (“apps”); and
                </span><br /><br />
                Any games, products, forums and services we offer through the apps or websites, or otherwise provided by us (all collectively referred to in this Privacy Policy as our “Services”)
                <br /><br />

                This Privacy Policy governs the collection, storage and use of personal information by us via our websites, apps and Services. It provides you with details about the personal information we collect from you, how we use your personal information, and your rights regarding the personal information we hold about you. Please read this Privacy Policy carefully.
                <br /><br />

                <span className="text-white font-light text-xl mb-5">Third party sites:-</span> <br /><br /> <span>Please note that the Services may contain links to websites or other services owned and operated by third parties. We do not endorse any such third - party services.We are not responsible or liable for anything that happens to you when you visit or use these services. Woxxin Solution strongly recommends that you review the privacy policies and cookie usage of these third parties</span>


            </>
        ),

    },
    {
        id: "data",
        title: "What data does Woxxin Solution collect from you?",
        content: (<>
            In this Privacy Policy, “data” means any personal data about you which could identify you (by itself or in combination with other data) such as your name, address, email address or an online identifier.
            <br /><br />
            We collect data about you in a number of different ways. In this section, we explain the different ways we collect personal data about you and the ways in which that information will be used. For more detail on how we use your data, please see the section titled ” What does Woxxin Solution do with this data?
            <br /><br />
            We will usually collect and store the following data about you when you access and use our Services:
            <br /><br />
            <span className="text-white font-light text-xl mb-5">Data you give us directly:-
            </span> <br /><br />
            <span className="font-light"> Note:</span> All the collected data will be sent to <a href="http://www.gamewithpals.com/" className="text-blue-500 underline hover:text-blue-700">
                www.gamewithpals.com
            </a> and all subsidiary domains (*.gamewithpals.com) for storing it. The main purpose behind collecting data is to authenticate users and keep record of user’s app/game progress.
            <br /><br />
            If you register an account with us directly on our Services, we will collect your date of birth, location, username, avatar, password and email address; <br /> <br />If you enter into any competitions or complete any surveys on our apps or websites, or when using any of our Services, we will collect and store the data you submit to us, including your name and contact details as well as information on your game scores and ranking in any competition;<br /><br />When you complete any in -app or in -game purchases, such as buying in -game currency and other items, we will collect data relating to your purchase history;<br /><br />When you participate in any Woxxin Solution chat forums on our Services, we will collect your username, email address and any data that you share within your messages posted to that forum; and < br /> <br />We will also collect information you provide to us if you raise a complaint, ask for technical support or report a problem with any of our Services, including when you contribute to or post on our our Community pages.< br /> <br />Data we may collect when you use our Services(whether or not you register with us):<br /><br />Data about your location, device type and model, operating system and version and platform, and any apps you are using in conjunction with our Services;<br /><br />Data about your device’s browser version, page loading time, mobile phone network and operator, generated device identifier information, referral source and IP address;<br /><br />Data generated when you play our games, such as the game version you are playing, your high score, log -in method, VIP level and rankings;<br /><br />Data relating to your game play history on our Services, including any purchases made;<br /><br />The number of times you visit or use any of our Services and the amount of time you spend using the Services; and < br /> <br />Where you are accessing our Services through a third - party account such as Facebook or Google, we will collect certain information relating to your account with those third parties including your name, user ID, location(country and / or city specific), email address, date of birth, information from your public profile including friends and connections, log in details, avatar and other information based on your use of our Services.You can manage the data which is shared by such third parties with us by amending your preferences using the privacy settings which these third parties provide on their platforms.<br /><br />We will sometimes use third party advertising companies to help us collect this data.Further information is provided below in the section titled “Third party advertising companies”.
        </>),


    },
    {
        id: "protect",
        title: "What does Woxxin Solution do with this data and what is our legal basis for processing this data?",
        content: (<>
            <span className="text-white font-light text-xl mb-5">Use of data which is necessary to perform a contract:-
            </span> <br /><br />
            We collect, store and use certain data as it is necessary in order for us to provide you with access to our Services under the relevant terms and conditions of those Services. This includes:
            <br /><br />
            Providing you with a consistent and personalised Service across different devices and platforms and parts of our Services, for example, ensuring that your progress is saved across devices and displaying your image to your social media contacts (for example, Facebook friends that also use our Services);
            <br /><br />
            To restrict customers from attempting to use our Services from a restricted territory or who are under-age and attempting to access inappropriate content in breach of our terms and conditions;
            <br /><br />
            To ensure that you are complying with our terms and conditions when you use our Services and taking any necessary action if you are not complying with our terms and conditions;
            <br /><br />
            To moderate any chat messages in chat forums, in order to restrict access to harmful, infringing or illegal content; and to process any refunds requested by you.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">This applies to the following data:-
            </span> <br /><br />
            Your username and password in order to allow you to log-in to your account for any of our Services from any device;
            <br /><br />
            Your contact details so that we can contact you with material variations to the legal terms relating to the Services you have asked us to supply (in accordance with our terms and conditions);
            <br /><br />
            Your contact details to communicate with you in relation to any competition that you have entered through our Services (in accordance with the relevant competition terms and conditions); and
            <br /><br />
            Your name and contact details along with details of your device operating system, browser version and IP address, in order to offer you technical support or respond to service questions that you raise.
            <br /><br />
            Use of data which is necessary for our legitimate interests
            <br /><br />
            Sometimes, our use of your data is for purposes which are ancillary to the provision of the Services, or which are desirable in order to make them operate more effectively. In those circumstances, we believe we have a legitimate interest in handling your data, and do not believe that this storage and use of your data will be of particular concern to you.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">We use your data for our legitimate interests in the following ways:
            </span> <br /><br />
            To detect and prevent fraud, hacking and/or cheating;
            <br /><br />
            To keep our Services secure;
            <br /><br />
            To provide you with any newsletter or blog that you subscribe to with us (which you can opt out of at any time using the privacy settings on our apps or through your profile settings on our websites);
            <br /><br />
            To customise the Services which are available to you;
            <br /><br />
            To improve the Services, for analysis and reporting purposes (this also includes using data to log any crashes in our provision of the Services, so we may report such interruptions (in this regard, we may use a third party to assist us));
            <br /><br />
            To track your use of our Services across our different games and platforms in order to provide you with a seamless experience;
            <br /><br />
            to connect social media accounts which you have actively linked with our Services (such as Facebook or Google+);
            <br /><br />
            to understand your preferences and personalise your experience of our Services;
            <br /><br />
            to send you push notifications with service-related information for certain Services (which you can choose not to accept or turn off by visiting the settings section of your device and selecting the appropriate setting);
            <br /><br />
            to communicate to you details of our events or promotions that you may be interested in within a game;
            <br /><br />
            to help us manage and provide you with advertising, as further described in the ‘Third Party Advertising’ section below;
            <br /><br />
            to record your preferences in relation to advertising and marketing communications; and
            <br /><br />
            to provide you with any customer support you have requested.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">Data we use with your consent
            </span> <br /><br />
            We collect, store and use your email address, if you have provided your consent, in order to send to you promotional offers and provide marketing for Services that we believe may be of interest to you (see below for details of our marketing communications). We also use your data to offer you other Services which we think may be of interest to you by email where you have given your consent.
            <br /><br />
            Some of the third party advertising companies that we work with also collect, use and store data about you with your consent when you access and use our Services in order to provide you with targeted advertising. For more details on our relationship with third party advertising companies and how you can manage your consents please see the section below titled ‘Third party advertising companies’.
            <br /><br />
            You can withdraw your consent at any point using the privacy settings available on our apps, and in your profile settings available on our websites, which means you will no longer receive these marketing messages.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">Anonymous data
            </span> <br /><br />
            We will also collect anonymised details about visitors to and use of our Services for the purposes of creating aggregate statistics or reporting purposes. However, no single individual will be identifiable from the anonymised details we collect for these purposes.
        </>)
    },
    {
        id: "marketing",
        title: "Does Woxxin Solution send marketing communications and how can I opt out?",
        content: (<>
            If you have provided your consent, we may send you marketing communications in relation to our other Services that we think may be of interest to you via email. These messages will only ever be in relation to the named other similar Services of Woxxin Solution that you have provided your consent to receive. We do not provide your data to third parties so that they can send you direct marketing communications via email or push notification without first obtaining your consent. Please also see the section below regarding third party advertising for more information about advertising activities on our Services involving third parties.
            <br /><br />
            You can opt-out of receiving any direct marketing communications that we (or any third party to whom we have disclosed your personal information with your consent) may send you by using the unsubscribe mechanism in those marketing emails, or, in relation to push notifications, by choosing not to accept them or by turning them off by visiting the settings on your device and selecting the appropriate setting.

        </>)
    },
    {
        id: "protectData",
        title: "What does Woxxin Solution do to protect data?",
        content: (<>
            We have implemented appropriate physical, electronic and managerial security procedures to safeguard the data we process from loss, misuse, and alteration and to help prevent unauthorised access, maintain data security and to ensure that we correctly use the data we hold in accordance with the purposes for which we collected that data.
            <br /><br />
            We use industry-standard practices such as encryption, physically secured rooms, firewalls and password protection systems to safeguard the confidentiality of any personal information that we might collect from you. For example, your email address and password will be encrypted which will make it very difficult for someone to discover and use them without our authorisation. We also strive to limit access to your data to employees performing a legitimate business function which requires them to access and use your data in order to supply you with our Services. We review our security procedures periodically to consider appropriate new technology and updated methods to ensure we continue to protect your data.
            <br /><br />
            Whilst we will do our best to protect your data, the transmission of information by you to us over the internet is not completely secure and we cannot guarantee the security of data during its transfer over the Internet to us. Any such transmission is at your own risk. Once we have received your data, we will use the procedures and security features outlined in this section to try to prevent any unauthorised access.
        </>)
    },
    {
        id: "keepHold",
        title: "How long does Woxxin Solution keep hold of data?",
        content: (<>
            We will keep data only for as long as it is relevant and useful for the purpose for which it was originally collected and otherwise where required by law. This means that we will only retain your data for the minimum reasonable time period to allow us to provide our Services to you. If you decide to delete an account you have with us, certain data does stay on our Woxxin Solution system for administrative purposes and to defend or bring any legal action.Please email us at woxxingames@gmail.com for information regarding retention periods.
        </>)
    },
    {
        id: "thirdParty",
        title: "What data is shared with or accessed by third parties?",
        content: (<>
            Woxxin Solution will share your data with various third parties (including our affiliate companies in other countries) as follows:
            <br /><br />
            We use third parties to help us manage your information and the Services, such as our cloud service provider, customer service and technical support provider, software and game developers, marketing delivery companies and IT maintenance providers. These are companies who are authorised to process data on our behalf only as necessary to provide the relevant services to us and cannot use it for their own independent purposes.
            <br /><br />
            Some games available via our websites are only “iFramed”. This means that, while such content looks like it is on our websites, it does not belong to us and is served by a third-party game developer and links to their site. In such instance your use of those games will be subject to their terms and conditions and privacy policy. However, the data you provide to them may also be shared with us and be subject to this Privacy Policy as well. We will let you know when you are playing an “iFramed” game through a pop-up message.
            <br /><br />
            We share your data with our third party payment providers where you have specifically asked us to complete any in-app or in-game purchases. These third-party payment providers may also ask us to share your data with them to confirm the nature of any payment transaction and to verify your identity and payment details.
            <br /><br />
            You may create a profile for certain Services which may be visible to other users. Other users can choose to add you as a friend. You can change your settings through the ‘edit profile’ function in our Services at any time.
            <br /><br />
            We or our third-party partners may disclose your personal data where we are required or permitted to do so by law or to protect or enforce our rights or the rights of any third party. We may also share your data with third parties to prevent fraud, abusive or unlawful behaviour or to demonstrate our compliance with other terms or laws.
            <br /><br />
            Woxxin Solution may disclose your information to third parties in connection with a purchase, transfer or sale of Woxxin Solution.
            <br /><br />
            If you choose to access any Services through a third party platform such as Facebook or Google, then that third party may collect other information about you (including about your use of the Services) in accordance with its terms and own privacy policy and sometimes they share some data with us. They have their own privacy settings which you can access on that third party platform in order to change your preferences.
            <br /><br />
            We require any third parties processing your data on our behalf to process it in accordance with your rights, our instructions and applicable law.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">Third party advertising companies:-</span> <br /><br />
            We want to make sure that our advertising and marketing is relevant and interesting to you and our other customers.
            <br /><br />
            To achieve this, we use third-party advertising and technology companies to serve ads and/or provide aggregated data to assist in serving ads when you visit or use our Services. This includes third party technology companies which collect data about you in order to build a profile of your preferences based on your activities when you visit or use our Services. We also use these companies to automatically collect data from you when you use our Services in order to help us identify the ads that are served to you and what you do after seeing those ads. In addition, we share data with providers of web analytics tools, such as Google Analytics, which we use to analyse your use of the Services. A list of the third party advertising and technology companies that we use, and links to their privacy information, is available here: List of advertising partners used in Woxxin Solution’s games.
            <br /><br />
            These third party advertising companies collect, store and use data by integrating cookies, tracking code and other software in our Services. The relevant data collected by these third parties includes a unique device ID, geo-location details and your assigned Woxxin Solution user ID. Data which you provide to Woxxin Solution when using our Services may also be captured by these third parties. The data collected by these third parties will vary, but may include your location, advertising ID, IP address, information on your interaction with advertising, browsing history and other technical information.
            <br /><br />
            These third party advertising companies will collect and use your data to provide you with more targeted advertising that is relevant to you and your preferences with your consent. You can control and withdraw your consent at any time by visiting the game settings page or your profile page available on our Services. If you do not provide or withdraw your consent to receive targeted advertising that is relevant to you and your preferences, or if we know you are under the age of 16, then we will still serve you advertising when you visit or use our Services but this will no longer be tailored to you or your preferences.
            <br /><br />
            In some cases these third parties will also use the data that they collect for their own purposes, for example they may aggregate your data with other data they hold and use this to inform advertising related services provided to other clients.
            <br /><br />
            Please see our Cookies Policy for more information on the third party advertising companies which collect, use and store data about you, and the use of cookies and other tracking technologies on our Services.
            <br /><br />
            We might also share your data with social media or other similar platforms, so that you and other people can see relevant content on that platform. For example, we may use the Facebook Custom Audiences service and share your Facebook ID or advertising ID in a protected format with Facebook so that we can: include you in a custom audience that we will serve relevant advertising content to on Facebook; or create an audience of other Facebook users based on the information in your Facebook profile. You can opt-out from Facebook Custom Audiences in your Facebook privacy settings.
            <br /><br /> </>)
    },
    {
        id: "overseas",
        title: "Will data be transferred overseas?",
        content: (<>
            The data that we collect from you will be transferred to, and stored at, a destination outside of the India, including the US (where some of our third-party cloud-based servers are based). It may also be processed by other Woxxin Solution group companies or by one of our third-party partners operating outside of the India. This transfer is required to host the Services, provide you with technical and customer support services, perform backups of your data, and to process your payment details if you make any in game purchases.
            <br /><br />
            When you use our Services, your personal information may be sent to the United States and possibly other countries. When we transfer, store, and use personal information collected in the European Countries outside of the European Countries, we comply with our legal obligations and ensure that your personal information is subject to suitable safeguards or transferred to “approved” territories.
            <br /><br />
            Although our collection, storage and use of your personal data will continue to be governed by this Privacy Policy. We will always ensure that any other such transfers of data are conducted in accordance with relevant laws in order to ensure adequate protection.



        </>)
    },
    {
        id: "GDPR",
        title: "GDPR Classifications",
        content: (<>
            Many types of data we process qualify for multiple legal bases for processing under the General Data Protection Regulation (“GDPR”). Below is the primary legal basis for each type of data that we process:
            <br /><br />
            1. We have a legitimate interest in conducting analytics, measurement of usage and conversions, and game telemetric to improve our Services. We and our processors have multiple measures in place to minimize the privacy impact.
            <br />
            2. We have a legitimate interest in storing users’ purchase history for the purpose of providing users help in fixing purchase and payment issues
            <br />
            3. We have a legitimate interest in enabling third party ads and data collection on our sites and apps to help provide a more customized ad experience for our users and site visitors. Our reputable partners provide opt outs and numerous other privacy measures to minimize the privacy impact of online ads.
            <br />
            4.We have a legitimate interest in periodic email and direct marketing, to inform registered users of updates and offers. We make clear disclosures when users sign up and offer opt outs for anyone not interested.
            <br /> <br />
            It is contractually necessary to process your username, email, password, cookie data, IP address, game network IDs, game information and similar information to fulfil our obligations in the Terms of Services to provide you with high quality games and a social game network from ourselves and our partners.
        </>)
    },
    {
        id: "Transfer",
        title: "International Transfer",
        content: (<>
            All Personal Information collected via or by Woxxin may be stored anywhere in the world, in the cloud or the servers of our service providers. When we transfer your Personal Information internationally, we will take reasonable steps to ensure that it is treated securely, lawfully and in the manner we describe in this Privacy Policy. Please note that laws vary from jurisdiction to jurisdiction, so the privacy laws applicable to the places where your information is transferred to or stored, used or processed in may be different from the privacy laws applicable to the place where you are resident.
            <br /><br />
            By providing information to Woxxin, you consent to the storage of your Personal Information in these locations.
            <br /><br />
            If you are using our Services from the European Union or other regions with laws governing data collection and use, please note that you are agreeing to the transfer of your information to India and other countries and to the processing of your data globally. This transfer is required to host the Services, provide you with technical and customer support services, perform backups of your data, and to process your payment details if you make any in game purchases.
            <br /><br />
            By choosing to visit the Site, using our Apps, utilizing the Services or otherwise providing information to us, you agree that any dispute over privacy or the terms contained in this Privacy Policy will be governed by the laws of India and the adjudication of any disputes arising in connection with Woxxin or the Site will be in accordance with the Terms Services.
        </>)
    },
    {
        id: "OPT-OUT",
        title: "OPT-OUT (Right to Restrict Processing)",
        content: (<>
            You have the right to opt out of certain uses and disclosures of your Personal Information. When you have consented to Woxxins’ processing of your Personal Information other information, you may withdraw that consent at any time and opt out to further processing by opening an in-game support ticket or, alternatively, by contacting woxxingames@gmail.com. Even if you opt out, we may still collect and use anonymized, non-Personal Information regarding your activities on our Services.
            <br />,<br />
            Please also note that certain records, for example, those relating to payments or customer service matters, will be held for legal and accounting purposes. If you have sent content through or posted content on the Service, we may not be able to delete it.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">1. Email Communications</span> <br /><br />
            If you receive an unwanted email from us, you can use the unsubscribe link at the bottom of the email to opt out of receiving future emails. We will process your request within a reasonable time after receipt. Note that you will continue to receive transaction-related emails regarding products or Services you have requested.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">2. Mobile devices</span> <br /><br />
            Woxxin may occasionally send you push notifications through our mobile applications with game updates, high scores and other notices that may be of interest to you. You may at any time opt out from receiving these types of communications by changing the settings on your mobile device. Woxxin may also collect location-based information if you use our mobile applications. You can opt out of this collection by changing the settings on your mobile device.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">3. Cookies and internet-based or targeted advertising</span> <br /><br />
            As noted, you may stop or restrict the placement of Cookies on your computer or remove them from your browser by adjusting your web browser preferences.
            <br /><br />
            The online advertising industry also provides websites from which you may opt out of receiving targeted ads from our data partners and our other advertising partners that participate in self-regulatory programs. You can also choose not to be included in Google Analytics  <a href="https://chromewebstore.google.com/detail/google-analytics-opt-out/fllaojicojecljbmefodhfapmkghcbnh?hl=en" className="text-blue-500 underline hover:text-blue-700">
                hear
            </a>. Please note that these opt out tools are provided by third parties, and Woxxin does not operate or control these tools or the choices that advertisers and others provide through these tools.
            <br /><br />
            On mobile devices, you can reset the Advertising Identifier (like an IDFA) from your mobile device’s settings page, which will prevent continued use of existing behavioral data tied to the previous Advertising Identifier. Furthermore, depending on the platform provider (such as Apple or Google), you may be able to download apps, such as the Digital Advertising Alliance’s “AppChoices” app, that provide you with control regarding the collection and use of cross-app data for tailored advertising. Like the opt out tools mentioned for web, these opt out tools are provided by third parties, and Woxxin does not operate or control these tools or the choices that advertisers and others provide through these tools.
            <br /><br />
            To be clear, whether you are using our opt out or an online industry opt out, these cookie-based opt outs must be performed on each device and browser that you wish to have opted out. For example, if you have opted out on your computer browser, that opt out will not be effective on your mobile device.

        </>)
    },
    {
        id: "ORectification",
        title: "Rights of Access, Rectification, Erasure, and Restriction",
        content: (<>
            You have the right to request access to and rectification or erasure of Personal Information. You can manage your information as described in this Privacy Policy, and you may have additional rights related to that information as described below. You can exercise these rights by opening a help ticket directly in-game via the ‘Help’ section, or by emailing Woxxin at woxxingames@gmail.com. Please note that we will need sufficient information establishing your identity in order for us to fulfill your request. Where we can validate your identity, we will process any such request within a reasonable timeframe and in accordance with applicable law.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">1. Accessing, Updating, or Correcting Your Data</span> <br /><br />
            You are expected to maintain accurate, complete, and up-to-date information in connection with your account, but we provide you functionality to update or correct your information directly in-app. You can also access a range of information in-app, including things like your user name, picture or avatar, game performance and progress, virtual items, chats, or other information you may have entered in-app. For any information that you are not able to access or update directly, please open an in-game help ticket via the ‘Help’ section for that particular game, or contact woxxingames@gmail.com.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">2. Deletion of Your Data</span> <br /><br />
            You have the right to request deletion of your personal information, subject to our data retention policy mentioned below. If you would like to have your personal information deleted with respect to any games you’ve played, please open an in-game help ticket via the ‘Help’ section for that game. If you have played multiple Woxxin games and want to have your personal information deleted as to all of them, please open a help ticket directly in-game via the ‘Help’ section for each of those games, or contact woxxingames@gmail.com for help. Please note that if you delete your personal information, you may no longer use or access the Services, and that if you share devices with someone else who uses the Services, that person may lose game progress or related account information and access. If you decide to use or access the Services again, Woxxin may consider this a new account and may collect personal information associated with that account in accordance with this Privacy Policy.

        </>)
    },
    {
        id: "Retention",
        title: "Data Retention",
        content: (<>
            Woxxin retains the Personal Information collected as described in this Privacy Policy for as long as you use our Services or as necessary to fulfill the purpose(s) for which it was collected, provide our Services, resolve disputes, establish legal defenses, conduct audits, pursue legitimate business purposes, enforce our agreements and comply with applicable laws.
        </>)
    },
    {
        id: "Children",
        title: "Children’s Privacy",
        content: (<>
            Most of our Services are not specifically targeted at children. Where the Services are being used by children under the age of 16, we recommend parents and guardians regularly clear their browser cache and/or browsing history to clear cookies. Please see our Cookies Policy for more information.
            <br /><br />
            For some Services however it may be possible for those under the age of 16 to register an account and access games and other content (with parental or guardian consent). Where children under 16 sign up and use our Services, their account is limited to those aspects of the Services which we deem appropriate for children.
            <br /><br />
            If you are under 16 and have signed up to use any of our Services, we will only collect and process the following limited data about you:
            <br /><br />
            your date of birth and email address. We collect, use and store this data as it is necessary in order to allow you to log-in and use the Services you have registered for. We need to use your date of birth to make sure that users are not attempting to access Services which we deem inappropriate; and
            <br /><br />
            data which is necessary to respond to a question or one-off request for customer service support from you. We believe we have a legitimate interest in handling your data for this purpose as it allows us to provide you with customer and technical support and a better experience of our Services and the benefits of this outweigh any potential impact on you in storing and using your personal information in this way.

        </>)
    },
    {
        id: "Guardians",
        title: "For Parents/Guardians",
        content: (<>
            If you would like to review or amend your child’s information, ask to have it deleted, and/or refuse to allow any further collection or use of your child’s information, then please send an email to our Data Protection Officer at woxxingames@gmail.com. Please be sure to include your email address and a telephone number where we can reach you. To protect your child’s privacy and security, we will take reasonable steps to help verify your identity before granting you access to the information that we collect and maintain about your child.
            <br /><br />
            We recommend that parents take the time to communicate and educate their children about Internet Safety.
        </>)
    },
    {
        id: "restrictData",
        title: "How do I erase or restrict or update my data?",
        content: (<>
            If you no longer wish for us to use your data, please get in touch. Please note that this may affect the provision of our Services to you, for example, you may not be able to enter any competitions or make any in game purchases.
            <br /><br />
            You have the right to ask us to amend or update any of your data which is out of date or incorrect, or change the way we may use your data.
            <br /><br />
            You also have the right to ask us to delete any personal information which we are holding about you. You can also object to our processing of data about you, and we will consider any valid objections which you raise. In certain circumstances we may not be able to stop using your personal data but, if that is the case, we’ll let you know and tell you why.
            <br /><br />
            If you wish to opt out of receiving any promotional emails or newsletters you can do so by clicking on the “unsubscribe here” link at the bottom of each email. To change or delete push notifications, visit the settings section on your device and select the appropriate setting, or change the settings on your browser if you are accessing any of our websites.
            <br /><br />
            If you have an account with us, in certain games, you can view and edit your profile to change the settings in order to prevent others being able to add you as a friend.
            <br /><br />
            If you wish to exercise any of the above rights, please get in touch with us by emailing woxxingames@gmail.com.

        </>)
    },
    {
        id: "getCopy",
        title: "How do I get a copy of my data?",
        content: (<>
            You have the right to ask us to provide you with copies of personal data that we hold about you at any time. Please contact us by emailing woxxingames@gmail.com.

        </>)
    },
    {
        id: "contact",
        title: "How can I contact Woxxin Solution?",
        content: (<>
            If you have any questions about this Privacy Policy or wish to request a copy of the data which we hold about you, please contact our Data Protection Officer at woxxingames@gmail.com.

        </>)
    },
    {
        id: "complaint",
        title: "What can I do if I have a complaint?",
        content: (<>
            If you are not satisfied with the way your query or complaint is handled by Woxxin Solution, please let us know by emailing us at woxxingames@gmail.com.
            <br /><br />
            List of advertising partners used in Woxxin Solution’s games

            <br /><br />
            As set out in our Privacy Policy, the following advertising partners are integrated into some or all of our games. These advertising partners may process personal data of our end users in accordance with our Privacy Policy.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">MOBILE</span> <br /><br />
            Advertising Partner
            <br /><br />
            <span className="text-white font-light text-xl mb-5">Link to Privacy Policy</span> <br /><br />
            AdColony :-  <a href="https://www.digitalturbine.com/legal/privacy-policy" className="text-blue-500 underline hover:text-blue-700">
                https://www.adcolony.com/privacy-policy/
            </a> <br /><br />
            AdMob (Google)  :-  <a href="https://policies.google.com/technologies/partner-sites" className="text-blue-500 underline hover:text-blue-700">
                https://policies.google.com/technologies/partner-sites
            </a> <br /><br />
            Adview  :-  <a href="https://www.adview.cn/" className="text-blue-500 underline hover:text-blue-700">
                https://www.adview.cn/web/overseas/policy/privacy
            </a> <br /><br />
            Applovin :-  <a href="https://www.applovin.com/en" className="text-blue-500 underline hover:text-blue-700">
                https://www.applovin.com/privacy/
            </a> <br /><br />
            Facebook  :-  <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0" className="text-blue-500 underline hover:text-blue-700">
                https://www.facebook.com/policy.php
            </a> <br /><br />
            Fyber :- <a href="https://www.digitalturbine.com/legal/privacy-policy" className="text-blue-500 underline hover:text-blue-700">
                https://www.fyber.com/legal/privacy-policy/
            </a> <br /><br />
            inMobi  :- <a href="https://www.inmobi.com/website-privacy-policy" className="text-blue-500 underline hover:text-blue-700">
                https://www.inmobi.com/privacy-policy/
            </a> <br /><br />

            ironSource   :- <a href="https://developers.is.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/" className="text-blue-500 underline hover:text-blue-700">
                https://developers.ironsrc.com/ironsource-mobile/air/iro
            </a> <br /><br />
            Loopme :- <a href="https://legal.loopme.com/privacy-center" className="text-blue-500 underline hover:text-blue-700">
                https://loopme.com/privacy/
            </a> <br /><br />
            MoPub :- <a href="https://applovin.com/en" className="text-blue-500 underline hover:text-blue-700">
                https://www.mopub.com/legal/privacy/
            </a> <br /><br />
            Oath :- <a href="https://legal.yahoo.com/in/en/yahoo/privacy/index.html" className="text-blue-500 underline hover:text-blue-700">
                https://policies.oath.com/in/en/oath/privacy/index.html
            </a> <br /><br />
            LifeStreet :- <a href="https://www.lifestreet.com/privacy/" className="text-blue-500 underline hover:text-blue-700">
                https://www.lifestreet.com/privacy/
            </a> <br /><br />
            Soomla :- <a href="https://unity.com/grow" className="text-blue-500 underline hover:text-blue-700">
                https://soomla.com/privacy-policy.html
            </a> <br /><br />
            Tapjoy :- <a href="https://docs.unity.com/en-us/grow/offerwall#privacy-policy" className="text-blue-500 underline hover:text-blue-700">
                https://www.tapjoy.com/legal/#privacy-policy
            </a> <br /><br />
            Unity Ads :- <a href="https://unity.com/legal/privacy-policy" className="text-blue-500 underline hover:text-blue-700">
                https://unity.com/legal/privacy-policy
            </a> <br /><br />
            Vungle :- <a href="https://liftoff.ai/privacy-policy/" className="text-blue-500 underline hover:text-blue-700">
                https://vungle.com/privacy/
            </a> <br /><br />

            <span className="text-white font-light text-xl mb-5">WEB</span> <br /><br />
            Advertising Partner            <br /><br />
            <span className="text-white font-light text-xl mb-5">Link to Privacy Policy</span> <br /><br />

            AppNexus :- <a href="https://about.ads.microsoft.com/en" className="text-blue-500 underline hover:text-blue-700">
                https://www.appnexus.com/en/company/platform-privacy-policy
            </a> <br /><br />
            Criteo :- <a href="https://www.criteo.com/privacy/" className="text-blue-500 underline hover:text-blue-700">
                https://www.criteo.com/privacy/
            </a> <br /><br />
            Google Doubleclick :- <a href="https://policies.google.com/technologies/ads" className="text-blue-500 underline hover:text-blue-700">
                https://policies.google.com/technologies/ads
            </a> <br /><br />
            Index Exchange  :- <a href="https://www.indexexchange.com/privacy/" className="text-blue-500 underline hover:text-blue-700">
                http://www.indexexchange.com/privacy/
            </a> <br /><br />
            Lifestreet Media :- <a href="http://www.lifestreet.com/privacy/" className="text-blue-500 underline hover:text-blue-700">
                http://www.lifestreet.com/privacy/
            </a> <br /><br />
            <span className="text-white font-light text-xl mb-5">Open X</span> <br /><br />
            Open X :- <a href="https://www.openx.com/privacy-center/ad-exchange-privacy-policy/" className="text-blue-500 underline hover:text-blue-700">
                https://www.openx.com/legal/privacy-policy/

            </a> <br /><br />
            <span className="text-white font-light text-xl mb-5">Open X</span> <br /><br />
            Pubmatic:- <a href="https://pubmatic.com/legal/privacy-policy/" className="text-blue-500 underline hover:text-blue-700">
                Advertiser Platform Privacy Policy

            </a> <br /><br />
            <span className="text-white font-light text-xl mb-5">Rubicon Project</span> <br /><br />
            <a href="https://www.magnite.com/legal/advertising-platform-privacy-policy/" className="text-blue-500 underline hover:text-blue-700">
                https://rubiconproject.com/privacy

            </a> <br /><br />
            Supersonic/Ironsource :- <a href="https://developers.is.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/" className="text-blue-500 underline hover:text-blue-700">
                https://developers.ironsrc.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/

            </a> <br /><br />
            Tap Research :- <a href="https://www.tapresearch.com/legal/privacy-policy-en" className="text-blue-500 underline hover:text-blue-700">
                https://www.tapresearch.com/user/privacy
            </a> <br /><br />
            The links to the third party privacy policies below were last checked on March , 2026.
        </>)
    },

];

export default function PrivacyPolicy() {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        document.title = "Privacy Policy - Woxxin Games";
    }, []);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };



    return (
        <section className=" min-h-screen pt-28 pb-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto mt-5">

                {/* PAGE TITLE */}
                <h1 className="text-white text-2xl text-center md:text-start  md:text-4xl font-light mb-10">
                    Privacy Policy
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* ================= LEFT CONTENT ================= */}
                    <div className="lg:col-span-2">

                        {/* Desktop Content */}
                        <div className="hidden lg:block space-y-12">
                            {sections.map((section) => (
                                <div key={section.id} id={section.id} className="scroll-mt-28"  >
                                    <h2 className="text-2xl font-light mb-4 text-white">
                                        {section.title}
                                    </h2>
                                    <p className="text-[#dadada] leading-relaxed">
                                        {section.content}
                                    </p>

                                </div>
                            ))}
                        </div>

                        {/* Mobile Accordion */}
                        <div className="lg:hidden space-y-6">
                            {sections.map((section, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-md p-6"
                                >
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full flex justify-between items-center text-left"
                                    >
                                        <h2 className="text-xl font-light">
                                            {section.title}
                                        </h2>

                                        <span className="text-blue-500">
                                            {openIndex === index ? (
                                                <Minus size={22} />
                                            ) : (
                                                <Plus size={22} />
                                            )}
                                        </span>
                                    </button>

                                    {openIndex === index && (
                                        <p className="mt-4 text-gray-600 leading-relaxed">
                                            {section.content}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* ================= RIGHT TABLE OF CONTENT ================= */}
                    <div className="w-auto hidden lg:block">
                        <div className="
    bg-[#3e4563] text-white rounded-xl p-6
    lg:sticky lg:top-24
  ">
                            <h3 className="text-xl md:text-2xl font-light mb-4 md:mb-6">
                                Table of Contents
                            </h3>

                            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
                                {sections.map((section, index) => (
                                    <li key={index}>
                                        <a
                                            href={`#${section.id}`}
                                            className="hover:text-[#7B61FF] transition block"
                                        >
                                            {index + 1}. {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}