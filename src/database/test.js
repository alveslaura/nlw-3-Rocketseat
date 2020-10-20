const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    //inserir dados na tabela
     await saveOrphanage(db, {
         lat: "-23.7098154",
         lng:"46.4969784",
         name:"Lar das meninas",
         about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
         whatsapp: "89578594656",
         images:[
            "images.unsplash.com/photo-1590966473477-e74b95a0c407?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1595009552535-be753447727e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),     
         instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
         opening_hours:"Horário de visitas das 18h até 8h.",
         open_on_hours:"0",

     },)

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM  orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

    //deletar dado da tabela 
    //await db.run('DELETE FROM orphanages WHERE id = "4"')
    //console.log(await db.run('DELETE FROM orphanages WHERE id = "3"'))
})