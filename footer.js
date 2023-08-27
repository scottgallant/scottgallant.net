document.write(`

<footer>
   <!-- Buttondown Form -->
   <form
   action="https://buttondown.email/api/emails/embed-subscribe/gallant"
   method="post"
   target="popupwindow"
   onsubmit="window.open('https://buttondown.email/gallant', 'popupwindow')"
   class="embeddable-buttondown-form"
   >
      <input type="email" name="email" id="bd-email" aria-label="Email Address" placeholder="Email Address" />
      <input type="submit" value="Subscribe" />
   </form>

   <p><small>Scott Gallant</small></p>

</footer>

`);