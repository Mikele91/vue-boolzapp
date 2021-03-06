const app = new Vue({
    el:"#root",
    data:{
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],  
        newMessage:"",
        guestContact :0, 
        newText:"",
        dataDelGiorno : "",
        searchText:"",
        // statusOnline:this.contacts[this.guestContact].this.messages[this.messages.length - 1].this.date,
        info_visible: {
            visible: false,
            key: null
            }
    },
    methods:{
            searchContact : function(index){
            this.guestContact = index;
            this.info_visible.visible = false;
            return this.guestContact
        },
        currentDateTime() {
            const current = new Date();
            const date = current.getDate()+'/'+(current.getMonth()+1)+'/'+current.getFullYear();
            const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
            const dateTime = date +' '+ time;
            
            return dateTime;
        },
        searchName:function(){
            this.contacts.forEach(element => {
                if(element.name.toLowerCase().includes(this.searchText.toLowerCase())){
                    element.visible = true;
                    
                    
                }else{
                    element.visible = false;

                }
            });
        },
        sentMessage : function(){
            let dataDelGiorno = this.currentDateTime()
            this.newMessage = {
                date: dataDelGiorno,
                message: "",
                status: 'sent'
            }
            this.newMessage.message= this.newText;
            this.contacts[this.guestContact].messages.push(this.newMessage);
            this.newText=""; 
            this.info_visible.visible = false;
            this.info_visible.key = null;

            setTimeout(()=>{ 
                answerMessage = {
                    date: dataDelGiorno,
                    message: "ok",
                    status: 'received'
                }
                this.contacts[this.guestContact].messages.push(answerMessage);
                // this.statusOnline=contacts[guestContact].messages[messages.length-1].dataDelGiorno;
                },1000);
        },
        showInfo:function(key){
            if( this.info_visible.visible != true){
                
                this.info_visible.visible = true;
                this.info_visible.key = key;
            }else{
                this.info_visible.visible = false;
                this.info_visible.key = null;
            }
        },
        deleteMes:function(key){
            let messages =  this.contacts[this.guestContact].messages;
            messages.splice(key, 1) ;
            // this.info_visible.visible = false;
            // this.info_visible.key = null; 
            // console.log(this.info_visible.key);
            // console.log(this.info_visible.visible);
            } 
    },
})




// Milestone 1
// ??? Replica della grafica con la possibilit?? di avere messaggi scritti dall???utente (verdi) e
// dall???interlocutore (bianco) assegnando due classi CSS diverse
// ??? Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
// nome e immagine di ogni contatto



// Milestone 2
// ??? Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
// messaggi relativi al contatto attivo all???interno del pannello della conversazione
// ??? Click sul contatto mostra la conversazione del contatto cliccato



// Milestone 3
// ??? Aggiunta di un messaggio: l???utente scrive un testo nella parte bassa e digitando
// ???enter??? il testo viene aggiunto al thread sopra, come messaggio verde
// ??? Risposta dell'interlocutore: ad ogni inserimento di un messaggio, l???utente ricever??
// un ???ok??? come risposta, che apparir?? dopo 1 secondo.



// Milestone 4
// ??? Ricerca utente: scrivendo qualcosa nell???input a sinistra, vengono visualizzati solo i
// contatti il cui nome contiene le lettere inserite (es. Marco, Matteo Martina -> Scrivo
// ???mar??? rimangono solo Marco e Martina)