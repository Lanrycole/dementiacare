<template>
  <div id="container">
    <policiesCard :info_title="info_title" :info_text="info_text"/>

  </div>
</template>

<script>
import policiesCard from '@/components/Policies'

export default {
  name: "AccessibilityPolicy",
  components: {
    policiesCard,
  },
  data() {
    return {
      info_title:"Diversified Dementia Care Privacy Policy\n",
      info_text:" <strong><p>Our Commitment \n</p></strong>" +
          " Diversified Dementia Care is committed to ensuring the protection and confidentiality of\n" +
          "your personal information in our care. Any of your personal information collected on this\n" +
          "website   or   while   rendering   our   services   to   you   will   be   kept   strictly   confidential.   Your\n" +
          "information will not be sold or disclosed to anyone without your consent. We will handle\n" +
          "your information with utmost care." +
          "We   are   committed   to   respecting   all   the   principles  set  out   in   the  <em>Personal Information\n" +
          "Protection and Electronic Documents Act (PIPEDA) and the Personal Health\n" +
          "Information Protection Act (PHIPA) </em>that govern our privacy policy.\n" +
          "<br>" +
          "<p>You have a right to know what personal or health information we collect, how we use it,\n" +
          "how we protect it, and how to contact us.</p>" +

          "<p>Diversified   Dementia   Care\t  collects,   uses,   discloses,   retains,   and   destroys   personal\n" +
          "information for the sole purpose of providing you quality health care services. \tDiversified\n" +
          "Dementia   Care’s\t  independent   contractors   and   employees’   personal   information   are\n" +
          "equally confidential and held private.</p>" +

          "  <strong><p>Our Accountability</p></strong>\n" +
          "We are accountable and committed to ensuring that your personal information is held in\n" +
          "the   highest   confidence.   Our   Privacy   policy   is   in   accordance   with   the   requirements   of\n" +
          "privacy legislation and best practices. \n" +
          "Our   independent   contractors   and   staff   understand   the   importance   of   keeping   your\n" +
          "personal information confidential and are committed to doing so." +
          " <br>" +
          "<br> <p> <strong>Information We Collect </strong></p> " +
          " We will only ask for personal and health information that is required for the benefit of\n" +
          "providing our services to you. We will not unnecessarily collect information that is not\n" +
          "essential to the service we provide to you.\n" +
          "At   Diversified   Dementia   Care,   we   care   for   our   patients’   health   and   wellbeing   and\n" +
          "provide personalized medical home care attention to get them feeling better again. As\n" +
          "part   of   our   service,   we   may   collect   information   regarding   your   health   or   assess   your\n" +
          "medical needs to provide our professional services to you in line with the ethics of our\n" +
          "profession. \n" +
          "We will endeavor that your personal information and health information are correct and\n" +
          "up to date. This will enable us to provide you with quality service and care. Please let us\n" +
          "know if there are any changes in your information." +
          "<p> <strong>Consent </strong></p>" +
          "Before we begin offering our services to you, your consent to our care service will be\n" +
          "required. Your consent will enable us to provide the best of care to you, and you have\n" +
          "the   right   to   withdraw   your   consent   at   any   time   by   notifying   us   in   writing,   which   may\n" +
          "affect the service or care we provide to you.\n" +
          "If you are unable to provide us with consent for any reason, consent may be given by\n" +
          "anyone authorized by law to give such consent on your behalf." +
          "<p> <strong>The use of your information and who it is shared with.\n </strong></p>" +
          "Your personal or health information is only used to provide you with our dementia care\n" +
          "and staffing services. Your Information will only be shared with professionals providing\n" +
          "you   care   with   your   consent.   We   will   not   share   your   information   with   anyone   not\n" +
          "connected with the care we provide to you. \n" +
          "Your   information   will   not   be   sold,   rented,   or   disclosed   for   any   commercial   gain   or\n" +
          "benefit.\n" +
          "Unless   required   by   law   \tDiversified   Dementia   Care   will   not   share   \tyour   personal\n" +
          "information with anyone not connected to the care, we provide to you. If this is the case,\n" +
          "only the necessary information will be provided to the lawful authority." +
          "<p> <strong>Your Rights  </strong></p>" +
          "You   have   the   right   to   see   your   information   and   correct   your   personal   information.\n" +
          "Please notify us in writing if you need to update your information." +
          "<p> <strong>How we protect your information</strong></p>" +
          "Diversified Dementia Care\t is committed to protecting and safeguarding your health and\n" +
          "personal information.\n" +
          "Your   information   is   stored   safely,   confidential,   and   securely   in   line   with   the   relevant\n" +
          "legislation’s provision. Your information is safeguarded to prevent unauthorized access.\n" +
          "Our   staff   or   independent   contractors   can   only   have   access   to   your   information   when\n" +
          "rendering care to you, and they have signed confidentiality agreements as part of their\n" +
          "contract of service. They will abide by the confidentiality standard of the profession." +
          "<p> <strong>Retention period</strong></p>" +
          "Diversified Dementia Care\t will have access to your information after our care or service\n" +
          "to you. The retention period by the provision of the law is 10 years. Your information will\n" +
          "be kept safe and strictly confidential.\n" +
          "After the retention period, all information will be destroyed following the provision of the\n" +
          "Law  and best practices.\n" +
          "<p> <strong>Privacy Policy Changes</strong></p>" +
          "This Privacy Policy is subject to change at any time. If this is the case, we will inform\n" +
          "you by putting a notice on our website. You agree to our Privacy Policy by using our\n" +
          "services or visiting our website, including any subsequent update. " +
          " <strong><p> Contact</p></strong> " +
          "  If you have any complaint, question, or concern about how we collect, use, or handle\n" +
          "your personal information. " +
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