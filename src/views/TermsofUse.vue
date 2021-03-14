<template>
  <div id="container">
    <policiesCard :info_title="info_title" :info_text="info_text"/>

  </div>
</template>

<script>
import policiesCard from '@/components/policiesCard'


export default {
  name: "TermsofUse",
  components: {
    policiesCard,
  },
  data() {
    return {
      info_title: "TERMS AND CONDITIONS OF USE",
      info_text: " You are welcome to use our \twebsite . Please read the terms and conditions that apply to\n" +
          "your use of our website. " +
          "<strong><p>Acceptance of Our Terms and Conditions of Use</p></strong>" +
          "Please be aware that by using our website, you agree that you have read, understood,\n" +
          "and will abide by our Terms and Conditions of Use. You agree as well to always provide\n" +
          "accurate information. " +
          "<strong><p>Our Policy</p></strong>" +
          "Our website contains information about the services we offer. At Diversified Dementia\n " +
          "Care, we care for our patients’ health and wellbeing and provide personalized medical \n" +
          "home care attention to get them feeling better again.  We also offer staffing solutions to \n" +
          "long-term care homes in need of nursing staff. Our services are offered to Canadian \n" +
          "residents, and only Canadian laws are applicable in your use of the website. \n" +
          "We do our best to provide you with accurate and up to date information on the website. \n" +
          "However, we do not guarantee the accuracy of any information. Please verify whatever\n " +
          "information is provided to you on the website. Your reliance is at your own risk.\n " +
          "We may decide to change, cancel, or expand our service scope without notice to you at \n" +
          "any time. However, all changes will be updated on our website. We will not be liable to\n" +
          "you or anyone for any changes or cancellation of any of our Services on the website.\n " +
          "Our services are designed to provide dementia support to you while you undergo \n" +
          "medical treatment or diagnosis.\n " +
          "<strong><p>Acceptable use of our website and services\n</p></strong>" +
          "You understand and agree that your use of our website SHALL be for lawful purposes\n" +
          "only. You are prohibited from using our website for unlawful purposes and act that could\n" +
          "cause damage to our website and services. You agree to comply with all applicable\n" +
          "laws, rules, and regulations in connection with your use of our website and services.\n " +
          "<strong><p>Prohibited Activities</p></strong>" +
          "You agree not to use our website for the following:\n" +
          "<br> ➢ To commit identity theft\n" +
          "<br> ➢Distribute computer viruses.\n" +
          "<br> ➢Violate our intellectual property or that of others.\n" +
          "<br> ➢Perpetuate any fraudulent or illegal activity.\n" +
          "<br> ➢Publish or distribute adult content, publish content that is harmful to others, or\n" +
          "expose us to any form of liability.\n" +
          "<br> ➢Promoting violence \n" +
          "<br> ➢To harass or violate the rights of others. \n" +
          "<br> ➢Violate the security of our website.\n" +
          "<strong><p> Compliance & Reporting violations</p></strong>" +
          "If we determine that you are in violation of our terms and conditions including the\n" +
          "prohibited use your use of our website or services may be suspended or terminated with\n" +
          "or without notice upon any violation of this policy. Your user account may be removed.\n" +
          "Please contact us to report any violation of our Terms and Conditions of Use.\n" +
          "User Account" +
          "<strong><p> User Account</p></strong>" +
          " If as part of your use of our website you, were required to register or create a user\n" +
          "      account, you agree to provide us with truthful information and to update your information\n" +
          "      if there is any change. You are responsible for the maintenance, content, and security of\n" +
          "      your account. You shall protect your account details including your password and\n" +
          "      prevent unauthorized use. You will be responsible for the act of anyone who use your\n" +
          "      account with or without your knowledge. We are not responsible for any Data Loss. If\n" +
          "      you notice any suspicious activity in your account, it is your responsibility to notify us\n" +
          "      immediately." +
          "<strong><p> Privacy Protection</p></strong>" +
          "During the use of our website, you may provide us with some information while\n" +
          "engaging our services or contacting us. You are authorizing us to use that information\n" +
          "as are acceptable under the law. We will not request or expect you provide to us\n" +
          "information that are not required for the purposes of using our services or website. \tYour\n" +
          "personal information is protected under Privacy Act in Canada. Please view our Privacy\n" +
          "Policy for more information.\n" +
          "You also agree that if you provide us with your contact details, we can contact you\n" +
          "regarding our services." +
          " <strong><p>Payment</p></strong>" +
          "If you make online payment for any of our services which may include taxes, you agree\n" +
          "      to use only valid and authorized instrument to make payment. You agree that we can\n" +
          "      use the billing details provided by you to process your payment. We reserve the right to\n" +
          "      cancel any transaction in contravention of our policies." +
          "<strong><p>  No Representations and Warranties</p></strong>" +
          "      Our Services are provided “as is” with no warranties. We make no representation or\n" +
          "    warranty, express or implied, as to the accuracy, completeness, quality, or adequacy of\n" +
          "    the information on the Site. We disclaim any express or implied warranties. We make no\n" +
          "    representations   or   warranties   with   respect   to   the   accuracy   of   information   or\n" +
          "    uninterrupted service through the website. We are not responsible for any damage that\n" +
          "    may be caused to your computer system or loss of data because of using our website." +
          " <strong><p>Limitation of Liability</p></strong>" +
          "      Diversified Dementia Care is not responsible or liable for any loss or damage that may\n" +
          "      occur by your use of our website. We disclaim any form of claim from you concerning\n" +
          "      any loss or damages. Indemnification\n" +
          "      You   agree   to   indemnify   and   hold   harmless   Diversified   Dementia   Care   and   its\n" +
          "      representatives from all damages, costs, liabilities, and any claim, including reasonable\n" +
          "      attorneys’ fees, made by you or anyone, which may arise from your use or misuse of\n" +
          "    our website." +
          " <strong><p>  Changes in Our Terms of Use & Conditions</p></strong> " +
          "    The terms and conditions may be changed from time to time. Any new changes to the terms and conditions will be posted on our website." +
          " <strong><p>   Service disruption</p></strong> " +
          "There may be service interruptions at any time during your use of our website. They can\n" +
          "    be because of maintenance services on our website or for any other reason either\n" +
          "    planned or unplanned. We shall not be liable for any loss or damage that may occur\n" +
          "    because of the service disruption." +
          " <strong><p> Termination</p></strong> " +
          "  We have the right to terminate your account or access to our website at any time if your\n" +
          "      activities are found to be contrary to our Terms and Conditions of Use." +
          " <strong><p> Applicable Laws</p></strong> " +
          "The applicable laws to the terms and conditions of use are Federal laws in Canada and\n" +
          "    Ontario Provincial Laws. Only courts with the province of Ontario will have jurisdiction\n" +
          "    over the terms and conditions of use." +
          " <strong><p>   Intellectual property</p></strong> " +
          " Diversified Dementia Care owns all copyright materials on the website except indicated" +
          "    otherwise. User generated content are also excluded. Our name, logo, graphics, and" +
          "    designs belong to us and should not be use without our express permission." +
          " <p>All rights Reserved</p>" +
          " <strong><p> Contact</p></strong> " +
          "   If you have any complaint, question, or concern about our Terms and Conditions of Use." +
          "  <p>Please contact us:</p> " +
          "  <p>Diversified Dementia Care</p> " +
          "  <p>2230 Blackwater Road</p> " +
          "  <p>London, Ontario N5X0M5</p> " +
          "  <p>Email: Diversified.Dementia@gmail.com</p> "


    }
  }

}
</script>

<style scoped>

</style>