import * as React from "react";
import styles from "./StoryPage.module.css";

function StoryPage() {
  /*
    https://cdn.shopify.com/s/files/1/0070/7032/files/mvmt-about-age.png?format=jpg&quality=90&v=1647467698
    https://cdn.searchenginejournal.com/wp-content/uploads/2018/08/mailchimp-about-us-page-5ec5b852e40d7.png
    https://cdn2.avada.io/media/resources/WrtbTi5.jpg <--- I chose this one for simplicity and aligning to her design.
    https://blog.hubspot.com/service/best-contact-us-pages - for contact us pages. 

    Use google map api to create the google map - scroll down to "Connect with one of our global offices"
    https://www.hubspot.com/company/contact?_ga=2.153440184.1862735785.1624414629-863205565.1624414629&hubs_post=blog.hubspot.com%2Fservice%2Fbest-contact-us-pages&hubs_post-cta=HubSpot 

    */
  return (
    <>
      <div class={styles["section-container"]}>
        <div class={styles["top-container"]}>
          <div class={styles["top-subContainer"]}>
            <div class={styles["top-title"]}>Our Story</div>
            <div class={styles["top-info"]}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              ipsam id vel, sit quaerat neque dolores eveniet eos minima nam?
              sit quaerat neque dolores eveniet eos minima nam? Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Minus ipsam id vel,
              sit quaerat neque dolores eveniet eos minima nam?
            </div>
          </div>
        </div>
        <div class={styles["bottom-container"]}>
          <div class={styles["article-container"]}>
            <div class={styles["article-left"]}>
              <div class={styles["article-title"]}>Design Inspiration</div>
              <div class={styles["article-info"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis perspiciatis commodi quos sunt doloribus illo, fugit
                nemo ipsa beatae? Eveniet odio quam voluptate quod cupiditate
                quas est, corrupti magnam aut.
              </div>
            </div>

            <div class={styles["article-img"]}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoryPage;
