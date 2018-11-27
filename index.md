---
layout: default
welcome:
    label: Welcome
    header: Free Initial Medical Consultation
    subheader: I am an Internal Medicine MD and have been practicing since 1999. I run a small, family-run general medicine practice in Wicker Park dedicated to providing compassionate, personalized, one-on-one medical care to each and every one of my patients.
    content:
      - I have seen first-hand the immensely positive impact on the quality of life of my patients and am committed to helping others gain access to this important medicine.  This is why I have been helping patients access medicine since the program began in 2015 and am firmly committed to helping others.
      - We look forward to seeing you!
process:
    header: The Process
    subheader:
      - Our simple four-step process to get a Illinois Medical Card
      - can be completed in just one visit!
    steps:
      - header: 1. Online form
        content:
          - Fill out the form below. We'll get back to you within 24 hours.
        icon:
            src: noun_form_25603_96b2b4.svg
      - header: 2. Appointment
        content:
          - We will send you a link to set up an appointment for your initial consultation.  We can usually see patients within a week.
        icon:
            src: noun_appointment_1040946_96b2b4.svg
      - header: 3. Certification
        content:
          - Depending on medical history, many patients receive their signed physician certification after their very first visit.
          - We charge $300 for patients who receive a medical certification, regardless of how many visits are required before the certification is signed.
        important: If you do not qualify you will not be charged.
        icon:
            src: noun_certify_1145817_96b2b4.svg
            width: 80
      - header: 4. Application
        content:
          - Our support staff will help you complete your application at <strong>no additional charge.</strong>
          - However, you will have to pay either $100 (1-year card) or $250 (3-year card) to the State of Illinois to complete the application.
        icon:
            src: noun_Check-Mark_890051_96b2b4.png
            width: 50
faq:
    header: Frequently Asked Questions
    subheader:
#     - You asked 
    blocks:
      - question: What other requirements are there to get a card?
        answer: You must be able to demonstrate that you are an Illinois resident, with either a driver&#x27;s license or official mail in your name sent to an Illinois address.
      - question: Do you accept insurance?
        answer: No. All expenses are out-of-pocket.
      - question: How old do I have to be?
        answer: There is no age minimum. Minors will need parental consent and will also require a second doctor&#x27;s certification, which will require an additional doctor&#x27;s visit and cost an additional $100.
      - question: What if I&#x27;m not sure that I qualify?
        answer: Fill out the form with the information you have and let&#x27;s figure it out together. Many more people qualify than believe they do and, with a free initial consultation, there&#x27;s no risk to you in trying.
      - question: How long does it take to get a card?
        answer: Before recent changes to the law, it was taking about 3 months after the application was submitted. However, now that background checks have ended we expect this number to drop very quickly.
form:
    header: Get Started
    email_subject: Dr Consalter Questions
    cc_email: 
    content: Fill the form below and we’ll get back to you as soon as possible, usually within 24 hours.
testimonials:
    header: Testimonials
    subheader: What People Say About Us
    blocks:
      - name: Tara A
        company: Google
        content: |
          Dr Consalter and Katie were extremely helpful and compassionate.
          It would have been impossible for me to navigate the system without them.
          I could not be happier. They get my highest praise and most enthusiastic recommendation.
        stars: 5
      - name: Anonymous
        company: Vitals.com
        content: |
          Dr. Consalter is in my opinion a very compassionate professional.
          He listens and does whatever is necessary to help.
        stars: 4
      - name: Anonymous
        company: Vitals.com
        content: |
          Super brilliant doctor, understood my issues and very knowledgeable. Helped me get medical card. Very helpful and personable.
        stars: 4

---

{% include welcome.html %}
{% include process.html %}
{% include form.html %}
{% include faq.html %}
{% include testimonials.html %}
