"use client";
import React, { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

const sections = [
    {
        id: "DEFINITIONS",
        title: "DEFINITIONS",
        content: (<>
            “Account” means an account you create when you access the Services.
            <br /><br />
            “Feature Terms” means any other rules related to specific services, like platforms and APIs, applications for mobile devices, forums, contests, subscriptions or loyalty programs that we may publish, which apply to your use of those specific services and state they are part of these Terms.
            <br /><br />
            “Offers” means special programs, including offers, excursions, and special gifts, both digital and tactile, that Woxxin may offer from time to time to certain eligible players.
            <br /><br />
            “Services” means our games, products, services, content, woxxin.com, and/or other domains or websites operated by Woxxin.
            <br></br>
            “Terms of Service” or “Terms” means these terms of service.
            <br /><br />
            “User Content” means all the data that you upload, transmit, create, or generate on or through the Services. This includes things like your profile picture, your in-game text or video chat, and your in-game art or other content authored or designed by you.
            <br /><br />
            “Virtual Items” means (a) virtual currency, including without limitation virtual coins, cash, tokens, or points, all for use in the Services and (b) virtual in-game items.
        </>)
    },
    {
        id: "CHANGES",
        title: "CHANGES TO THESE TERMS",
        content: (<>
            We reserve the right, at our discretion, to change, modify, add, or remove portions of the Terms, Community Rules, or Feature Terms at any time by posting the amended Terms, Community Rules, or Feature Terms on our sites or within the Services (such as through in-game notices). We may provide additional notice, such as an e-mail message or messaging within the Services, of any material changes. Unless we state otherwise, changes are effective when posted. New versions of the Terms, Community Rules, and Feature Terms, and any other policies, codes, or rules will be accessible at <a href="https://woxxingames.com/" className="text-blue-500 underline hover:text-blue-700">
                woxxingames.com
            </a> or from within the Services. If you continue to use the Services after the changes are posted, you are agreeing that the changes apply to your continued use of the Services.
            <br /><br />
            You can’t make changes to the Terms, Community Rules, or Feature Terms unless both you and Woxxin sign a written amendment.
            <br /><br />
            If you have a dispute with Woxxin, the version of the Terms, Community Rules, and Feature Terms in effect at the time Woxxin received actual notice of the dispute will apply to such dispute.
            <br /><br />
            If the Terms or our Privacy Policy have any provisions or information that conflict with other Woxxin terms or policies, these Terms and the Privacy Policy as applicable shall govern.



        </>)
    },
    {
        id: "Account",
        title: "ACCOUNT INFORMATION AND SECURITY",
        content: (<>

            In order to use our Services, we may ask you to create an Account and select a password and/or provide us with certain personal information, which may include your name, birthdate, e-mail address, and, in some cases, payment information. This information will be held and used in accordance with Woxxin’s Privacy Policy.
            <br /><br />
            You agree to supply Woxxin with accurate, complete, and up-to-date information, particularly your email address.
            <br /><br />
            You are responsible for maintaining the security of your Account. Don’t share your Account details with others or allow others to access or use your Account. We will treat all acts performed through your Account as being performed by you. You therefore accept responsibility for all acts done using your Account, whether or not authorized by you, including purchases made using any payment instrument (for example, credit card or PayPal), and you understand you may be held liable for losses incurred by us or any other user of the Services caused by someone else using your Account.
            <br /><br />
            If you become aware of any actual or suspected loss, theft, fraud, or unauthorized use of your Account or Account password, please tell us immediately.

        </>)
    },
    {
        id: "services",
        title: "USING OUR SERVICES",
        content: (<>
            <b>Who can use our Services:</b> We are excited to have you start playing our games, but there are some limits on who can use our Services.
            <br /><br />
            You may <b>not</b> use our Services if:
            <br /><br />
            You cannot enter into a binding contract with Woxxin.
            <br /><br />
            You are under 13 years of age (or under 16, if you are located in the European Economic Area (the “EEA”)), in which case you must not create an Account, use any of our Services, or submit personal information in the Services or to Woxxin (for example, your name, address, telephone number, or email address). This prohibition does not apply if, and only if, a Woxxin Service has an age-gate that collects age information before allowing a user to proceed and that age-gate allows users who identify themselves as under 13 years of age (or under 16 in the EEA) to use the Service. (As described in our Privacy Policy, in those instances, we will either provide a version of that Service that does not collect, use, or disclose personal information, except where and to the extent permitted by applicable data protection laws, including without limitation the Children’s Online Privacy Protection Act, or obtain legally valid parental consent.)
            <br /><br />
            You are not allowed to receive products, including services or software, from the United States, for example if you are located in a country embargoed by the United States or if you are on the U.S. Treasury Department’s list of Specially Designated Nationals.
            <br /><br />
            You are a convicted sex offender.
            <br /><br />
            You have previously been banned from playing any Woxxin game or using any Woxxin Service, unless Woxxin has reversed that ban, in its sole discretion.
            <br /><br />
            If you are under the age of 18, or under the age of majority where you are located, you represent that your legal guardian has reviewed and agreed to these Terms.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">1. Additional Important Rules and Terms:
            </span> <br /><br />
            If you use our Services, you must follow the Woxxin Community Rules and all other Feature Terms that may apply. These additional rules and terms apply in addition to these Terms and are important. Please read them. If you access the Services from a social network, such as Facebook, or download the Services from another platform, such as Apple or Google, you must also comply with that third party’s terms of service/use as well as these Terms.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">2. Accessing our Services:
            </span> <br /><br />
            To access or play our games or create an Account with us, you may need an account with a social network, like Facebook, and, if you are using our mobile Services, an account with the company that provides your mobile applications, like an Apple iTunes account. You may need to update third-party software from time to time to receive the Services and play Woxxin’s Games.
            <br /><br />
            We provide the games and other Services. You provide the equipment (computer, phone, tablet, etc.) and pay any fees to connect to the Internet and app stores, and for data or cellular usage to download and use the Services.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">3. Tournament Terms & Conditions:
            </span> <br /><br />
            1. Free Participation: All tournaments in the game are completely free to enter. No purchase, payment, or entry fee is required to join or win.
            <br /><br />
            2. No Betting, Lottery, or Loot Boxes: These tournaments do not include or promote any form of betting, gambling, lottery, or chance-based loot box mechanics. Outcomes are determined purely by player skill and gameplay performance.
            <br /><br />
            3. Gameplay & Points: Players earn points by completing and winning matches. The leaderboard ranks players based on their total points during the tournament period.
            <br /><br />
            4. Disclaimer: This feature is not sponsored, endorsed, or administered by Amazon, Google and Apple Inc. All trademarks and brand names belong to their respective owners.
            <br /><br />
            5. In-App Purchases: Any in-game goods, coins, or item purchases do not influence leaderboard ranking, progress, or winning chances in the tournament.
            <br /><br />
            6. Winners & Prizes: After the tournament ends, the top three players on the leaderboard receive an in-app winner popup showing their prize details and a “Claim” button.
            <br /><br />
            7. Reward Claim Process: Winners can claim prizes directly within the game. After claiming, they receive an in-app confirmation message stating that their Amazon Gift Card (non-transferable and not redeemable for cash) will be delivered within 7 working days.
            <br /><br />
            8. Global Availability: Tournaments are available to players worldwide but may be disabled in regions where local laws restrict prize-based competitions.
            <br /><br />
            9. Fair Play & Disqualification: Players using cheats, multiple accounts, or unfair gameplay methods will be disqualified and forfeit rewards.
            <br /><br />
            10. Modification & Cancellation: Woxxin Solutions Private Limited reserves the right to modify, suspend, or cancel any tournament due to technical issues, legal restrictions, or policy updates.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">3. Service Changes and Limitations:
            </span> <br /><br />
            Our Services are evolving and we may require that you accept updates to the Services as well as to the Terms, Community Rules, Feature Rules, and the Woxxin Privacy Policy. From time to time we may make you update the game or your software to continue to use our Services. We may perform these updates remotely, including to Woxxin software residing on your computer or mobile device, without notifying you.
            <br /><br />
            <i>“Woxxin reserves the right to stop offering and/or supporting the Services or a particular game or part of the Services at any time either permanently or temporarily, at which point your right to use the Services or any part of them will be automatically terminated or suspended. If that happens, unless applicable law requires otherwise, Woxxin is not required to provide refunds, benefits, or other compensation to you in connection with discontinued elements of the Services or for Virtual Items previously earned or purchased”</i>
            <br /><br />
            <i>WOXXIN MAY, IN ITS SOLE DISCRETION, LIMIT, SUSPEND, TERMINATE, MODIFY, OR DELETE ACCOUNTS OR ACCESS TO THE SERVICES OR ANY PORTION OF THEM; PROHIBIT ACCESS TO OUR GAMES AND SITES, AND THEIR CONTENT, SERVICES, AND TOOLS; OR DELAY OR REMOVE HOSTED CONTENT, AND WOXXIN IS UNDER NO OBLIGATION TO COMPENSATE YOU FOR ANY LOSSES OR RESULTS.”</i> This does not apply to users located in the EEA. If you are located in the EEA, we will endeavor to give you at least one month’s notice of any material changes before they take effect, and if you are unhappy with those changes, you can choose to cancel your Services under these Terms.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">5. Deleting your Account:
            </span> <br /><br />
            You may stop using our Services at any time and may request that we delete your Account at any time by following the instructions in our   <a href="https://woxxingames.com/components/pages/privacy-policy" className="text-blue-500 underline hover:text-blue-700">
                Privacy Policy.
            </a>. Unless applicable law requires otherwise, we are not required to provide refunds, benefits, or other compensation if you request deletion of your Account.

        </>)
    },
    {
        id: "ownership",
        title: "OWNERSHIP; LIMITED LICENSE",
        content: (<>
            <span className="text-white font-light text-xl mb-5">1.  Games and Services:
            </span> <br /><br />
            The Services are comprised of works that are owned or licensed by the Woxxin, and they are protected by copyright, trademark, trade dress, patent, and other worldwide intellectual property rights and other applicable laws, rules, or regulations. All such rights are reserved. These Terms do not grant you or any other party any right, title, or interest in the Services or any content in the Services.
            <br /><br />
            So long as you abide by these Terms and any other rules, including the Community Rules and any Feature Terms, you may use the Services subject to these Terms, for your own non-commercial, entertainment purposes. You agree not to use the Services for any other purpose and agree that Woxxin will have no liability to you for any damage or loss arising from unauthorized uses.
            <br /><br />
            If you breach these Terms, or any of our other terms that apply to you, we may take action against you, up to and including terminating your account. In addition, you may be breaking the law, including breaches or violations of Woxxin’s intellectual property rights.<i>ANY ATTEMPT BY YOU TO DISRUPT OR INTERFERE WITH THE SERVICES, INCLUDING WITHOUT LIMITATION UNDERMINING OR MANIPULATING THE LEGITIMATE OPERATION OF ANY WOXXIN GAME, IS A BREACH OF Woxxin POLICY AND MAY BE A BREACH OR VIOLATION OF CRIMINAL AND CIVIL LAWS.</i>
            <br /><br />
            <span className="text-white font-light text-xl mb-5">2. Your Account and Virtual Items:
            </span> <br /><br />
            Regardless of any other statement in these Terms, the Community Rules, or any Feature Terms that apply to features you may choose to use, you do not own any Account that you create on our Services, including in our games, and your Account is not your property. Likewise, you do not own any Virtual Items that you obtained through our Services, regardless of whether you “earned” those Virtual Items or “purchased” them. Your Account and any related Virtual Items are owned by Woxxin. Woxxin gives you a limited license and right to use your Account and the related Virtual Items while we offer the Services.
            <br /><br />
            <i>TO AVOID RETAINING DATA THAT IS NO LONGER NEEDED AND/OR TO IMPROVE OUR SERVICES, WE MAY DELETE OR TERMINATE ACCOUNTS THAT ARE INACTIVE (I.E., NOT LOGGED INTO) FOR 180 DAYS.</i>
            <br /><br />
            You are not allowed to transfer Virtual Items outside of the Services (e.g., in the “real world”), for example by selling, gifting, or trading them. We won’t recognize those transfers as legitimate. You are not allowed to sublicense, trade, sell, or attempt to sell Virtual Items for “real” money, or exchange Virtual Items for value of any kind outside of a game. Any such transfer or attempted transfer is prohibited and void, and we may terminate your Account because of it.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">3. User Content:
            </span> <br /><br />
            If you post, publish, transmit, or upload User Content on the Services, you agree that it will be:
            <br /><br />
            1. accurate<br />2. not confidentia<br />3. not in violation of law<br />4. not in violation of contractual restrictions or other parties’ rights, and that you have permission to use the User Content from any other party whose personal or other information or intellectual property is contained within the User Content <br />5. free of viruses, adware, spyware, worms, or other malicious code.
            <br /><br />
            Your User Content will be processed by Woxxin in accordance with our  <a href="https://woxxingames.com/components/pages/privacy-policy" className="text-blue-500 underline hover:text-blue-700">
                Privacy Policy.
            </a> You are solely responsible for securing and backing up your content.
            <br /><br />
            Any User Content that you post, publish, or transmit will be considered non-proprietary and non-confidential. You retain all of your ownership rights in your User Content, but you give Woxxin a perpetual and irrevocable (other than as provided below or in our Privacy Policy), worldwide, royalty free, non-exclusive, license to use, reproduce, distribute, prepare derivative works of, display, and perform your User Content and any modified and derivative works thereof in connection with the Services, including in marketing and promotions. To the extent allowed by applicable laws, you waive any moral rights you may have in any User Content (like the right to be identified as the author of the User Content or the right to object to a certain use of that User Content).
            <br /><br />
            We have the right to remove any of your User Content if, in our opinion, it does not comply with these Terms, our Community Rules, or any applicable Feature Terms. We also have the right to disclose your identity to any third party who is claiming that any of your User Content constitutes a breach of their intellectual property rights or their right to privacy. We will also disclose your User Content to other third parties or government bodies where we are legally required to do so.
            <br /><br />
            Woxxin’s license to your User Content ends when you request deletion of your Account by submitting a request through our Personal Data Request Portal as described in our  <a href="https://woxxingames.com/components/pages/privacy-policy" className="text-blue-500 underline hover:text-blue-700">
                Privacy Policy
            </a>, with the following exceptions:
            <br /><br />
            1. User Content submitted in response to Woxxin promotions, which will be subject to any Feature Terms or other terms of the promotion<br /> 2. User Content either shared with others, which they have not deleted or already used publicly as allowed under these Terms and<br />3. User Content subject to a separate license with Woxxin, which will be subject to the terms of such license.
            <br /><br />
            If you request deletion of your User Content we will take reasonable steps to remove your User Content from active use, which may include suppression of your User Content in our systems. However, User Content may persist in our systems, including in back-up copies. We may also retain copies of User Content if we reasonably believe it is legally required.
            <br /><br />
            When you post, publish, or transmit your observations and comments on the Services, such as in forums, blogs, and chat features, we cannot guarantee that other players will not use the ideas and information that you share. If you have an idea or information that you would like to keep confidential and/or don’t want others to use, don’t post it. <i>WOXXIN IS NOT RESPONSIBLE FOR ANY OTHER PERSON’S USE OR APPROPRIATION OF ANY CONTENT OR INFORMATION YOU POST, PUBLISH, OR TRANSMIT IN ANY FORUMS, BLOGS, OR CHAT ROOMS.</i>


        </>)
    },
    {
        id: "MONITORING",
        title: "MONITORING USE OF SERVICES AND USER CONTENT",
        content: (<>
            We have no obligation to monitor the Services for inappropriate or illegal User Content or the conduct of other players, and we take no responsibility for such conduct. We also are not responsible for information, materials, products, or services provided by other players (for instance, in their profiles) and User Content is not approved by us. By using our Services, you understand that you may be exposed to conduct that you might find offensive or otherwise objectionable. We do not endorse any User Content posted on the Services, and nor do we guarantee its truthfulness or accuracy.
            <br /><br />
            While we have no obligation to monitor the Services, we have the right, in our sole discretion, to monitor, record, or store your interactions with the Services or your communications with Woxxin or other player when you are using the Services (including without limitation your communications through in-game text or video chat). For more information, see our Privacy Policy. We may also, at our discretion, choose to edit, refuse to post, or remove any User Content or any other materials that we deem in our sole discretion to be objectionable. If we determine that your communications or User Content violate these Terms, Feature Terms, or Community Rules, we have the right, in our sole discretion and without notice, to disable your ability to post User Content or to communicate with other players, or we may terminate your access to the Services entirely.
        </>)
    },
    {
        id: "DEALINGS",
        title: "YOUR DEALINGS WITH OTHER PLAYERS",
        content: (<>
            You are responsible for your interactions with other players. If you have a problem with another player, we are not required to get involved, but we can if we desire.
            <br /><br />
            If you have a dispute with another player, you release Woxxin from responsibility, claims, demands, and/or damages (actual or consequential) of every kind and nature, whether known or unknown, resulting from that dispute or connected to that dispute. This includes damages for loss of profits, goodwill, use, or data. This does not apply to users located in the EEA. If you are located in the EEA, your liability vis-à-vis Woxxin is as set forth by the law applicable in the country where you reside.
            <br /><br />
            As part of the Services, we may offer you the opportunity to play with your friends or other matched opponents. To ensure that you always have available opponents at the right skill level, some of these matched opponents may be auto-generated players that look and play like real people.
            <br /><br />
            If you are located in California, you waive California Civil Code §1542, which says: “A general release does not extend to claims which the creditor does not know or suspect to exist in his or her favor at the time of executing the release, which if known by him or her must have materially affected his settlement with the debtor.”
            <br /><br />
            We may allow you to use the Services to initiate SMS or MMS text messages to your friends, family, or other contacts. You are not required to send such text messages, you are solely responsible for them, and you understand that standard text messaging and data rates may apply based on your plan with your mobile phone carrier. You also understand that Woxxin does not control the recipients, content, or timing of these text messages. If you choose to send text messages through the Services, you represent and warrant to us that the recipients of the text messages have appropriately consented to receive the text messages.
        </>)
    },
    {
        id: "PAYMENT",
        title: "PAYMENT TERMS",
        content: (<>
            We provide a service in the form of access to games, Virtual Items, and our other Services. In the Services you may use “real world” money to obtain a limited license and right to use Virtual Items and/or other goods or services.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">1. How it Works:
            </span> <br /><br />
            You get a limited license and right to use Virtual Items by visiting the purchase page in one of our games or Services and providing billing authorization through the platform on which you are playing (e.g., Facebook, Apple, Google).
            <br /><br />
            When you purchase Virtual Items in our games on other platforms such as Facebook, Apple, or Google, Woxxin is not a party to the transaction and your purchase will be governed by the third-party platform’s payment terms and conditions. Please review the platform’s terms of service for additional information. You can also contact our Billing Support team as described below for questions concerning refunds of purchases made through Facebook or Google.
            <br /><br />
            For Virtual Items, your order will represent an offer to us to obtain a limited license and right to use the relevant Service(s) or Virtual Item(s) that will be accepted by us when we accept payment. At that point, the limited license begins.
            <br /><br />
            For orders to obtain a limited license and right to use Virtual Items, by clicking the purchase/order button on the purchase window or page you:
            <br /><br />
            <i>1.agree that we will supply the Virtual Items to you as soon as we have accepted your order; and</i><br /><i>2. if you reside in the European Union (the “EU”), you acknowledge that you will therefore no longer have the right to cancel under the EU’s Consumer Rights Directive (as implemented by the law of the country where you are located) once we start to supply the Virtual Item.</i>
            <br /><br />
            You understand that while you may “earn,” “buy,” or “purchase” Virtual Items in our Services, you do not legally “own” the Virtual Items and the amounts of any Virtual Item do not refer to any credit balance of real currency or its equivalent. Any “virtual currency” balance shown in your Account does not constitute a real-world balance or reflect any stored value, but instead constitutes a measurement of the extent of your limited license.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">2. ALL SALES ARE FINAL:
            </span> <br /><br />
            <i>YOU ACKNOWLEDGE THAT Woxxin IS NOT REQUIRED TO PROVIDE A REFUND FOR ANY REASON, AND THAT YOU WILL NOT RECEIVE MONEY OR OTHER COMPENSATION FOR UNUSED VIRTUAL ITEMS WHEN AN ACCOUNT IS CLOSED, WHETHER SUCH CLOSURE WAS VOLUNTARY OR INVOLUNTARY, OR WHETHER YOU MADE A PAYMENT THROUGH WoxxinGAMES.COM OR ANOTHER PLATFORM SUCH AS APPLE, GOOGLE, FACEBOOK, OR ANY OTHER SITES OR PLATFORMS WHERE WE OFFER OUR SERVICES.</i>
            <br /><br />
            PURCHASES TO ACQUIRE A LIMITED LICENSE AND RIGHT TO USE VIRTUAL ITEMS ARE NON-REFUNDABLE TO THE FULLEST EXTENT ALLOWED BY LAW.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">3. Additional Payment Terms:
            </span> <br /><br />
            You agree to pay all fees and applicable taxes incurred by you or anyone using an Account registered to you. Woxxin may revise the pricing for the goods and services it licenses to you through the Services at any time.
            <br /><br />
            <span className="text-white font-light text-xl mb-5">4. Billing Support:
            </span> <br /><br />
            For billing support, please contact us through <i className="text-blue-500 underline hover:text-blue-700 cursor-pointer">
                support@woxxingames.com
            </i>  or Please note that telephone support for billing-related issues and questions is available in English only. These telephone numbers are for billing-related issues and questions ONLY. The person that answers the telephone at these billing support telephone numbers will NOT be able to help you with technical issues, game play, or in-game purchasing questions. For non-billing customer assistance, you must contact us through Customer Support.
        </>)
    },
    {
        id: "offers",
        title: "PROMOTIONS AND OFFERS",
        content: (<>
            From time to time, we may offer limited-time promotions. Please review the official rules or Feature Terms (if any) associated with any promotion. They will apply in addition to these Terms.
            <br /><br />
            In addition, from time to time, we may promote Offers. We are not required to give, and you are not required to accept, any Offer. Offers are not transferable, redeemable, or exchangeable for other things of value, except at our sole discretion. If you accept any Offer, you may have to sign a declaration of eligibility and liability release or other paperwork to receive the Offer. Some Offers will be subject to taxes and other charges, travel, or activities outside of the virtual world, all of which will be disclosed before you accept the offer. If you accept any Offer, you assume all liability associated with the Offer.

        </>)
    },
    {
        id: "third",
        title: "THIRD-PARTY ADVERTISING",
        content: (<>
            Our Services may feature advertisements from us or other companies. Our <a href="https://woxxingames.com/components/pages/privacy-policy" className="text-blue-500 underline hover:text-blue-700">
                Privacy Policy
            </a>  explains what information we share with advertisers. Please read it.
            <br /><br />
            Sometimes we provide links in our games or on the Services to other third-party companies’ websites or to companies who invite you to participate in a promotional offer and offer you some feature of the Services or upgrade (such as in-game currency) in exchange. Any charge or obligation you take on in dealing with these other companies is your responsibility.
            <br /><br />
            We are not responsible for any third-party website that we link to in our Services, and such a link does not mean we endorse or approve that linked site or any information you obtain from it. We are not liable for any claim relating to any content, goods, and/or services of third parties.
            <br /><br />
            Please also note that the linked third-party sites are not under our control and may collect data or ask you to provide them with personal or other information, or they may automatically collect information from you. When you use these third-party sites and services, the third-party company may (or may not) ask you for permission to access your information and content. We are not responsible for these other companies’ content, business practices, or privacy policies, or for how they collect, use, or share the information they get from you.
        </>)
    },
    {
        id: "copy",
        title: "COPYRIGHT NOTICES/COMPLAINTS",
        content: (<>
            We respect the intellectual property rights of others and ask that you do, as well. We respond to notices of alleged copyright infringement that comply with the US Digital Millennium Copyright Act (“DMCA”), the E-Commerce Directive and associated legislation in the EU, and similar or equivalent other local laws that may apply. We reserve the right to terminate any player’s access to the Services if we determine that the player is a “repeat infringer.” We do not have to notify the player before we do this.
        </>)
    },
    {
        id: "feedback",
        title: "FEEDBACK AND UNSOLICITED IDEAS",
        content: (<>
            We may request your feedback on certain features through a promotion or our customer insights program. You are not obliged to respond to our request. Any feedback you provide at our request through a promotion or program is subject to the rules of the specific promotion or program. And any idea, information, or feedback you submit to us voluntarily is subject to our Unsolicited Ideas.
        </>)
    },
    {
        id: "of",
        title: "AVAILABILITY OF THE SERVICES; WARRANTY DISCLAIMER",
        content: (<>
            Woxxin makes no promises or guarantees that the Services or any content on them will always be available, uninterrupted, or error-free. We may suspend, withdraw, or restrict the availability of all or any part of our Services for business and operational reasons.
            <br /><br />
            USE OF THE SERVICES IS AT YOUR SOLE RISK. THEY ARE PROVIDED ON AN “AS IS” BASIS. TO THE EXTENT PERMITTED BY APPLICABLE LAW, Woxxin MAKE NO WARRANTIES, CONDITIONS, OR OTHER TERMS OF ANY KIND, EITHER EXPRESS OR IMPLIED, ABOUT THE SERVICES. Woxxin DISCLAIM ANY WARRANTIES OF TITLE OR IMPLIED WARRANTIES, CONDITIONS, OR OTHER TERMS OF NON-INFRINGEMENT, MERCHANTABILITY, QUIET ENJOYMENT, OR FITNESS FOR A PARTICULAR PURPOSE.
            <br /><br />
            If your state or country does not allow these disclaimers, they do not apply to you. If your state or country requires a certain period for which a warranty applies, it will be either the shorter of 30 days from your first use of the Services or the shortest period required by law.
        </>)
    },
    {
        id: "limi",
        title: "LIMITATIONS; WAIVER OF LIABILITY",
        content: (<>
            YOU ACKNOWLEDGE THAT Woxxin ARE NOT LIABLE
            <br /><br />
            (1) FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES, INCLUDING FOR LOSS OF PROFITS, GOODWILL, OR DATA, IN ANY WAY WHATSOEVER ARISING OUT OF THE USE OF, OR INABILITY TO USE, THE SERVICES; OR
            <br /><br />
            (2) FOR THE CONDUCT OF THIRD PARTIES, INCLUDING OTHER USERS OF THE SERVICES AND OPERATORS OF EXTERNAL SITES.
            <br /><br />
            THE RISK OF USING THE SERVICES AND EXTERNAL SITES RESTS ENTIRELY WITH YOU AS DOES THE RISK OF INJURY FROM THE SERVICES AND EXTERNAL SITES.
            <br /><br />
            TO THE FULLEST EXTENT ALLOWED BY ANY LAW THAT APPLIES, THE DISCLAIMERS OF LIABILITY IN THESE TERMS APPLY TO ALL DAMAGES OR INJURY CAUSED BY THE SERVICES, OR RELATED TO USE OF, OR INABILITY TO USE, THE SERVICES, UNDER ANY CAUSE OF ACTION IN ANY JURISDICTION, INCLUDING, WITHOUT LIMITATION, ACTIONS FOR BREACH OF WARRANTY, BREACH OF CONTRACT, OR TORT (INCLUDING NEGLIGENCE).
            <br /><br />
            TO THE MAXIMUM EXTENT PERMISSIBLE UNDER APPLICABLE LAWS, THE TOTAL LIABILITY OF Woxxin IS LIMITED TO THE TOTAL AMOUNT YOU HAVE PAID Woxxin IN THE ONE HUNDRED AND EIGHTY DAYS (180) DAYS IMMEDIATELY PRECEDING THE DATE ON WHICH YOU FIRST ASSERT ANY SUCH CLAIM.
            <br /><br />
            IF YOU HAVE NOT PAID Woxxin ANY AMOUNT IN THE ONE HUNDRED AND EIGHTY DAYS (180) DAYS IMMEDIATELY PRECEDING THE DATE ON WHICH YOU FIRST ASSERT ANY SUCH CLAIM, YOUR SOLE AND EXCLUSIVE REMEDY FOR ANY DISPUTE WITH Woxxin IS TO STOP USING THE SERVICES AND TO CANCEL YOUR ACCOUNT.
            <br /><br />
            Some states or countries do not allow the exclusion of certain warranties or the limitations/exclusions of liability described above, which means these limitations/exclusions may not apply to you if you reside in one of those states or countries. These limitations/exclusions apply fully to New Jersey residents.
            <br /><br />
            These limitations/exclusions to do not apply to users located in the EEA. For those users, if Woxxin fails to comply with these Terms, Woxxin is responsible for loss or damage you suffer that is a foreseeable result of Woxxin’s breach of these Terms or is a result of Woxxin’s negligence, but Woxxin is not responsible for any loss or damage that is not foreseeable. Loss or damage is foreseeable if it was an obvious consequence of our breach or if it was contemplated by you and Woxxin at the time we entered into these Terms.


        </>)
    },
    {
        id: "LAW",
        title: "APPLICABLE LAW",
        content: (<>
            If you are located in the United States, you agree that these Terms affect interstate commerce and that the Federal Arbitration Act (including its procedural provisions) governs the interpretation and enforcement of Section 15 (Agreement to Arbitrate and Class Action Waiver). In addition, these Terms and our relationship will be governed by California law, except for its conflicts of laws principles.
            <br /><br />
            If you are located anywhere other than the United States, these Terms and our relationship will be governed by Irish law, except for its conflicts of laws principles.
        </>),
    },
    {
        id: "VENUE",
        title: "VENUE FOR LEGAL DISPUTES NOT SUBJECT TO ARBITRATION",
        content: (<>
            If you are located in the United States, judicial proceedings (other than small claims actions) that are excluded from the Arbitration Agreement in Section 15 must be brought in state or federal court in San Francisco, California, unless the parties agree to some other location. You, Woxxin consent to venue and personal jurisdiction in San Francisco, California.
            <br /><br />
            If you are located anywhere other than the United States, judicial proceedings must be brought in a court of competent jurisdiction in the state where you are habitually resident (“Applicable Jurisdiction”), unless the parties all agree to some other location. You, Woxxin consent to venue and personal jurisdiction in the Applicable Jurisdiction.
        </>)
    },
    {
        id: "terms",
        title: "SEPARATION OF TERMS",
        content: (<>
            Each of the paragraphs of these Terms operates separately. Except as described in Section 15 under the “No Class Actions” heading, if any part of these Terms, Feature Terms, or Community Rules is not enforceable, the rest of these Terms, Feature Terms, and Community Rules still apply and are binding, and any unenforceable term will be substituted with a term that comes as economically close to the unlawful or unenforceable term as possible.
        </>)
    },

    {
        id: "ASSIGNMENT",
        title: "ASSIGNMENT",
        content: (<>
            We may give our rights, or our obligations, under these Terms, Feature Terms, or Community Rules to any person or entity at any time with or without your consent. You may not give your rights or your obligations under these Terms, Feature Terms, or Community Rules to anyone without first getting Woxxin’s written consent, and any attempt to do so without our consent is void.
        </>)
    },
    {
        id: "ENTIRE",
        title: "ENTIRE AGREEMENT",
        content: (<>
            These Terms, and any other policies or rules we reference in these Terms, make up the entire agreement between you and us relating to the subject matter of these Terms, and supersede all prior understandings of the parties relating to the subject matter of these Terms, whether those prior understandings were electronic, oral or written, or whether established by custom, practice, policy or precedent, between you and us. This provision does not apply to users located in the EEA.
        </>)
    },
    {
        id: "LANGUAGE",
        title: "LANGUAGE OF THE TERMS",
        content: (<>
            If we provide a translated version of these Terms, Feature Terms, Community Rules, Privacy Policy, or any other terms or policy, it is for informational purposes only. If the translated version means something different from the English version, then the English meaning will be the one that applies. This provision does not apply to users located in the EEA.
        </>)
    },
    {
        id: "NOW",
        title: "NO WAIVER",
        content: (<>
            If we do not enforce our rights under these Terms, Feature Terms, or Community Rules, that does not waive our right to do so later. And, if we do expressly waive a provision of these Terms, Feature Terms, or Community Rules, that does not mean it is waived for all time in the future. If we do waive a default or breach by you, we will only do so in writing, and that will not mean that we will automatically waive any later default or breach by you.
        </>)
    },
    {
        id: "NOTICES",
        title: "NOTICES",
        content: (<>
            If we have to give you notice of something according to the Terms, Feature Terms, or Community Rules, we may notify you by posting a message in the Woxxin game(s) you play, sending you an e-mail, or using other ways of communicating with you based on the contact information you provide to us.
            <br /><br />
            If you have to give us notice of something according to the Terms, Feature Terms, or Community Rules, the notice must be in writing and addressed to Woxxin Inc., Attn: LEGAL DEPARTMENT, 699 8th Street, San Francisco, CA 94103, unless we have provided a more specific way of notifying us.
        </>)
    },
    {
        id: "FORCE",
        title: "FORCE MAJEURE",
        content: (<>
            We are not liable for any changes or problems out of our control, for example, changes or problems caused by natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, network infrastructure failures, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials This provision does not apply to users located in the EEA.
            <br /><br />
            This content was last updated on March , 2026.
        </>)
    }

];

function TermsCondition() {
    const [openIndex, setOpenIndex] = useState(null);
    useEffect(() => {
        document.title = "Terms Conditions- Woxxin Games";
    }, []);


    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className=" min-h-screen pt-28 pb-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto mt-5">

                {/* PAGE TITLE */}
                <h1 className="text-white text-2xl text-center md:text-start md:text-4xl font-light mb-10  ">
                    Terms and Conditions
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
                                    <p className="text-[#dadada]  leading-relaxed">
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
                                        <h2 className="text-xl font-semibold">
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
                    {/* ================= RIGHT TABLE OF CONTENT ================= */}
                    <div className="w-auto hidden lg:block">
                        <div className="
    bg-[#3e4563] text-white rounded-xl p-6
    lg:sticky lg:top-24
  ">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
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

export default TermsCondition;
