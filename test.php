<?php include('./include/head.php') ?>
<?php include('./include/primary-top-bar.php') ?>
<?php include('./include/header.php') ?>
<?php include('./include/inner-top-bar.php') ?>
<main class="accept-payments go inner-pages">
<section class="inv_acc">
    <div class="container inner_container">
      <div class="row_flex row justify-content-between">
        <div class="row_inner col-lg-5">
          <h2>Professionally request payment from your customers</h2>
          <div class="accordion d-flex align-items-start justify-content-start gap-20">
            <div class="inv_acc_left">
              <img src="./assets/images/invoice/plus.png" class="acc_plus" alt="">
              <img src="./assets/images/invoice/minus.png" class="acc_minus" alt="">
            </div>
            <div class="inv_acc_right">
              <div class="accordion_intro">
                <h4 class="">1. Log in to your Clover Web Dashboard</h4>
              </div>
              <div class="accordion_content">
                <img src="./assets/images/invoice/acc/1.webp" class="accordion_image">
                <p>Click on Virtual Terminal, and select Send Invoice. Enter the amount due along with
                  customer information.</p>
              </div>
            </div>
          </div>
          <div class="accordion d-flex align-items-start justify-content-start gap-20">
            <div class="inv_acc_left">
              <img src="./assets/images/invoice/plus.png" class="acc_plus" alt="">
              <img src="./assets/images/invoice/minus.png" class="acc_minus" alt="">
            </div>
            <div class="inv_acc_right">
              <div class="accordion_intro">
                <h4 class="">2. Send your invoice by email</h4>
              </div>
              <div class="accordion_content">
                <p>Your customer will receive an invoice email with a “Pay” button that will take them
                  to an
                  online payments page.</p>
                <img src="./assets/images/invoice/acc/2.webp" class="accordion_image">
              </div>
            </div>
          </div>
          <div class="accordion d-flex align-items-start justify-content-start gap-20">
            <div class="inv_acc_left">
              <img src="./assets/images/invoice/plus.png" class="acc_plus" alt="">
              <img src="./assets/images/invoice/minus.png" class="acc_minus" alt="">
            </div>
            <div class="inv_acc_right">
              <div class="accordion_intro">
                <h4 class="">3. Enable customer to pay online</h4>
              </div>
              <div class="accordion_content">
                <p>Your customer simply enters their credit or debit card information into the online
                  payment form.</p>
                <img src="./assets/images/invoice/acc/3.webp" class="accordion_image">
              </div>
            </div>
          </div>
          <div class="accordion d-flex align-items-start justify-content-start gap-20">
            <div class="inv_acc_left">
              <img src="./assets/images/invoice/plus.png" class="acc_plus" alt="">
              <img src="./assets/images/invoice/minus.png" class="acc_minus" alt="">
            </div>
            <div class="inv_acc_right">
              <div class="accordion_intro">
                <h4 class="">4. Process payments quickly</h4>
              </div>
              <div class="accordion_content">
                <p>Once the form is submitted, payment is processed and the customer sees an on-screen
                  payment confirmation.</p>
                <img src="./assets/images/invoice/acc/4.webp" class="accordion_image">
              </div>
            </div>
          </div>
          <div class="accordion d-flex align-items-start justify-content-start gap-20">
            <div class="inv_acc_left">
              <img src="./assets/images/invoice/plus.png" class="acc_plus" alt="">
              <img src="./assets/images/invoice/minus.png" class="acc_minus" alt="">
            </div>
            <div class="inv_acc_right">
              <div class="accordion_intro">
                <h4 class="">5. Receive email confirmations</h4>
              </div>
              <div class="accordion_content">
                <p>Both you and your customer receive email confirmations that the invoice has been
                  paid.
                </p>
                <img src="./assets/images/invoice/acc/5.webp" class="accordion_image">
              </div>
            </div>
          </div>
        </div>

        <div class="row_inner col-lg-6 accordion_images">
          <img src="./assets/images/invoice/acc/1.webp" alt="">
          <img src="./assets/images/invoice/acc/2.webp" alt="">
          <img src="./assets/images/invoice/acc/3.webp" alt="">
          <img src="./assets/images/invoice/acc/4.webp" alt="">
          <img src="./assets/images/invoice/acc/5.webp" alt="">
        </div>

      </div>
    </div>
  </section>
</main>
<?php include('./include/pos-system-sec.php') ?>
<?php include('./include/static-sec.php') ?>
<?php include('./include/footer.php') ?>
<script>
    const accordions = document.querySelectorAll(".accordion");
    const accordionImages = document.querySelector(".accordion_images"); // Get the accordion_images container

    const openAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion_content");
        accordion.classList.add("accordion_active");
        content.style.maxHeight = content.scrollHeight + "px";
    };

    const closeAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion_content");
        accordion.classList.remove("accordion_active");
        content.style.maxHeight = null;
    };

    const activateImages = (index) => {
        const images = accordionImages.querySelectorAll("img");
        images.forEach((img, i) => {
            if (i === index) {
                img.classList.add("active");
            } else {
                img.classList.remove("active");
            }
        });
    };

    accordions.forEach((accordion, index) => {
        const intro = accordion.querySelector(".accordion_intro");
        const content = accordion.querySelector(".accordion_content");

        intro.onclick = () => {
            if (content.style.maxHeight) {
                closeAccordion(accordion);
                activateImages(-1);
            } else {
                accordions.forEach((accordion) => closeAccordion(accordion));
                openAccordion(accordion);
                activateImages(index);
            }
        };
    });

    //default click first accordion
    const firstAccordion = document.querySelectorAll(".accordion_intro")[0];
    firstAccordion.click();
</script>
<?php include('./include/scripts.php') ?>