<template>
    <section class="contact">
      <h2>Tell me about your next project</h2>
      <div class="buttons">
        <a href="mailto:example@email.com" class="btn dark">Email Me</a>
        <a href="https://wa.me/1234567890" class="btn light">WhatsApp</a>
      </div>
    </section>
  </template>
  
  <style>
  .contact {
    text-align: center;
    padding: 4rem 2rem;
    background-color: #f3f3f3;
    border-radius: 2rem;
    margin: 4rem auto;
  }
  
  .contact h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  .btn {
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    text-decoration: none;
    font-weight: bold;
  }
  
  .btn.dark {
    background-color: #000;
    color: #fff;
  }
  
  .btn.light {
    background-color: #fff;
    color: black
  }

</style>