---
title: Sources
---
<!DOCTYPE html>
<html lang="en">

<style>

.hero {
  display: grid;
  grid-template-columns: 1fr auto;
  width: 100%;
  font-family: var(--sans-serif);
  margin: 1rem 0;
  overflow: hidden;
  text-align: justify;
}

.hero h1 {
  margin: 1rem 0;
  max-width: 100%;
  font-size: 40px;
  font-weight: 1000;
  line-height: 1;
  text-align: left;
}

.hero h2 {
  grid-column: 1 / -1;
  margin: 1rem 0;
  max-width: 100%;
  font-size: 30px;
  font-style: initial;
  font-weight: 800;
  line-height: 1;
  color: var(--theme-foreground-muted);
  text-align: left;
}

.hero h3 {
  margin: 0;
  max-width: 100%;
  font-size: 20px;
  font-style: initial;
  font-weight: 600;
  line-height: 1;
  color: var(--theme-foreground-muted);
  text-align: left;
}

.hero-image {
  margin-top:0px;
  float: right;
  width: 250px;
  height: auto;
  margin-left: 20px; 
  margin-right: 20px; 
}
.image-container {
    display: inline-block;
    width: auto; /* Adjust as needed, or use a fixed width */
    text-align: center;
}

.hero-image_1 {
    display: block;
    width: 50%; /* Make the image take the full width of the container */
    float: left; 
}

figcaption {
    margin-top: 0px; /* Add some space between the image and the caption */
    font-size: 1rem; /* Adjust the font size as needed */
    width: 100%;
    margin: 0; /* Ensure the caption is the same width as the image */
}

</style>

<div class="hero">
  <h1>Les sources utilisées</h1>
</div>

<div class="hero">
    <h2>La Gazette de Lausanne</h2>
    <h>Notre source primaire est La Gazette de Lausanne, une publication emblématique de la presse suisse, dont l'histoire remonte à près de trois siècles. Gabriel-Antoine Miéville, avocat revolutionnaire lausannois, fonda le journal en 1798 sous le nom de Peuple vaudois pendant une période marquée par les révolutions européennes et la chute de l'Ancien Régime.</h>
    <figure class='hero-image'>
    <img src="./data/gazette_de_lausanne_image.png"alt= class="hero-image">
    <figcaption> Affiche publicitaire de 1943, signée Richmond (Museum für Gestaltung Zürich)</figcaption>
    <figure>
</div>

<div class="hero">
    <figure class='hero-image'>
      <img src="./data/gazette_text.jpeg" alt=class="hero-image">  
      <figcaption> Extrait du journal La Gazette de Lausanne de 1939.</figcaption>
    </figure> 
    <h>La Gazette de Lausanne, un quotidien de tendance libérale, était un fervent défenseur des idéaux républicains et des principes de la Révolution française. Son contenu était axé sur la politique, l'économie et les affaires internationales, offrant aux lecteurs une perspective éclairée sur les événements majeurs de l'époque. Au fil des décennies, le journal a traversé diverses périodes de changement et d'adaptation, reflétant les transformations sociales, politiques et technologiques de son époque. Il restait avant tout un pilier de l'information politique et sociale en Suisse. En 1991, la Gazette de Lausanne a été intégrée au Journal de Genève. Puis, en 1998, lors de la fusion entre le Journal de Genève et Le Nouveau Quotidien, son nom a été effacé pour donner naissance au Temps. </h>
  
</div>

<div class="hero">
  <h2>Impresso</h2>
  <h>
  <h>Afin de visualiser et d’extraire les donnees de la Gazette de Lausanne des XIXème et XXème siècles, nous avons utilisé la base de données, Impresso, sur laquelle on retrouve les archives numériques de nombreux articles de journaux historiques. Fondé en 2016, l'objectif principal d'Impresso est de numériser et de rendre accessibles de vastes archives de journaux dans le but de faciliter la recherche et l'analyse historique. Impresso a été développé en collaboration de chercheurs en informatique, en histoire et en sciences sociales avec comme partenaires les universités de Lausanne, Zurich et du Luxembourg, et de l’EPF. L’approche méthodologique repose sur l'intégration de techniques de traitement automatique du langage naturel (NLP), de fouille de textes et de méthodes de visualisation de données pour extraire des informations significatives des archives de journau . Cette source nous a ainsi permis de visualiser les articles de la Gazette de Lausanne et de sélectionner seulement ceux qui nous interessait en fonction de leur date de publication et les thèmes évoqués. </h>
  <img src="./data/impresso_screenshot.png" alt="" style="width:100%; height:auto; margin-top:10px;">
  <figcaption> Exemple d'utilisation de la base de données Impresso</figcaption>
</div>

<div class="hero">
  <h2>Elites Suisses</h2>
  <h>
  <h>Puisque nous nous sommes interessés aux personnes mentionées dans la Gazette de Lausanne, nous avons utilisé la base de donnees Elites Suisses, publiées par l’Université de Lausanne, pour apporter une valeur bibliographique. Conçue et développée en 2013 par des chercheurs en sciences sociales, cette base de données offre un accès structuré et détaillé sur des personnalités qui ont occupé des postes clés dans différents domaines d'influence au fil de l'histoire suisse. En rassemblant des données biographiques, professionnelles et politiques sur ces individus, Elites Suisses nous a permis d’apporter du contenue et ainsi de mieux analyser les liaisons entre les individus que nous remarquions dans les articles.</h>
  <img src="./data/elites_suisses.png" alt= ; style="width:100%; height:auto; margin-top:10px;">
  <figcaption> Exemple de la base de données Elites Suisses</figcaption>
</div>

<div class="hero">
  <h2>Wikipedia</h2>
  <h>Enfin, Wikipedia nous a permis de completer les bibliogrpahies des personnalités qui n’etaient pas disponibles dans Elites Suisses. Il s’agit d’une encyclopédie en ligne collaborative, fondée le 15 janvier 2001 par Jimmy Wales et Larry Sanger. Son objectif était de créer une ressource universelle et accessible à tous, où les connaissances du monde entier pourraient être partagées et diffusées librement. Son modèle de fonctionnement repose sur la participation volontaire des utilisateurs du monde entier, qui contribuent à la rédaction, à l'édition et à la mise à jour des articles. Malgré les défis liés à la fiabilité et à la neutralité des contenus, Wikipedia est devenue l'une des principales sources d'information en ligne.</h>
  <img src="./data/Wikipedia-logo-big-fr.pdf.jpg", alt="Logo de Wikipedia" style="width:200px; height:auto; margin-top:10px; margin-left:20px">
</div>

</html>