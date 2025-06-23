const linkWhatsapp = "https://wa.me/5563999488154?text=Olá, tenho interesse em seus serviços jurídicos.";

const links = document.querySelectorAll(".whatsapp-link");

links.forEach (function (link){
link.href = linkWhatsapp;
link.target = "_blank";
});

const linkTelephone = "tel:+5511999998888";

const links2 = document.querySelectorAll(".telephone-link");

links2.forEach(function(link2) {
link2.href = linkTelephone;
link2.target = "_blank";
}

);

const linkGmail = "mailto:email@exemplo.com?subject=Interesse em serviços jurídicos&body=Prezados,%0D%0A%0D%0AMeu nome é João Silva e estou entrando em contato para solicitar informações sobre os serviços jurídicos oferecidos por seu escritório.%0D%0A%0D%0AEstou enfrentando uma situação relacionada a direito trabalhista e gostaria de entender melhor como funciona o atendimento, valores e disponibilidade para uma eventual consulta.%0D%0A%0D%0AAgradeço desde já pela atenção.%0D%0A%0D%0AAtenciosamente,%0D%0AJoão Silva";

const gmailMessage = document.querySelectorAll('.gmail-link');

gmailMessage.forEach(function(link3) {
link3.href = linkGmail;
link3.target = "_blank";
});