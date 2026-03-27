import { ICountdownMessageInterface } from "../Component/Interfaces/ICountdownInterface";

export default class Mappings {
 public static lockPinError: string = "Errore nel caricamento del PIN:";
 public static lockPinMismatchError: string = "Ops! Questo regalo è riservato solo al mio amore. Riprova ❤️";
 public static lockTitle: string = "Un regalo speciale riservato solo a te ❤️";
 public static pinPlaceholder: string = "Inserisci PIN";
 public static letterTitle: string = "Per il mio puddino, oggi e sempre ❤️";
  public static letterBadge: string = "Siena, 29 Marzo 2026";
 public static targetDate: string = "2026-03-29T00:00:00";
 public static heartSpinnerText: string = "Preparando una sorpresa speciale...";
 public static pinAPIquery: string = "\\PuddiGift\\pin.json";
 public static messageAPIquery: string = "\\PuddiGift\\message.txt";
 public static countdownTitle: string = "Mancano ancora:";
public static countdownMessages: ICountdownMessageInterface[] = [
    { start: 0, end: 7, texts: ["Buongiorno amore mio ❤️… oggi è un giorno speciale", "Spero che tu abbia dormito bene"] },
    { start: 8, end: 10, texts: ["Chissà se indovinerai cosa ti aspetta", "Oggi potrebbe essere incredibile…"] },
    { start: 11, end: 13, texts: ["Ogni momento con te vale doppio 💖", "Non c'è posto dove vorrei essere se non qui con te"] },
    { start: 14, end: 16, texts: ["Il sole del pomeriggio mi parla di noi", "Ci sono momenti che restano per sempre"] },
    { start: 17, end: 19, texts: ["Sai qual è la cosa più bella? Noi.", "Alcune cose non si possono spiegare… ma ci sei tu"] },
    { start: 20, end: 22, texts: ["Ci stiamo avvicinando a qualcosa… non distrarti", "Respira... tra poco sarà speciale"] },
    { start: 23, end: 23, texts: ["Ci siamo quasi… ancora pochissimo ❤️", "Prepara il cuore… sta arrivando"] },
  ];
  public static QUESTIONS_DATA: any[] = [
  // --- DIVERTENTE ---
  { cat: "Divertente", color: "#a8cce0", text: "Chi dei due è più testardo?" },
  { cat: "Divertente", color: "#a8cce0", text: "Chi dei due si arrabbia più facilmente?" },
  { cat: "Divertente", color: "#a8cce0", text: "Chi dei due dorme di più?" },
  { cat: "Divertente", color: "#a8cce0", text: "Chi dei due mangia di più?" },
  { cat: "Divertente", color: "#a8cce0", text: "Chi dei due è più pigro?" },
  { cat: "Divertente", color: "#a8cce0", text: "Chi dei due fa più casino?" },
  { cat: "Divertente", color: "#a8cce0", text: "Chi dei due perde più cose?" },
  { cat: "Divertente", color: "#a8cce0", text: "Chi dei due arriva sempre in ritardo?" },
  { cat: "Divertente", color: "#a8cce0", text: "Chi dei due è più drammatico?" },
  { cat: "Divertente", color: "#a8cce0", text: "Chi dei due canta peggio?" },
  { cat: "Divertente", color: "#a8cce0", text: "Chi dei due balla peggio?" },
  { cat: "Divertente", color: "#a8cce0", text: "Chi dei due fa più facce strane?" },
  { cat: "Divertente", color: "#a8cce0", text: "Chi dei due si distrae più facilmente?" },
  
  // --- COMPLICE ---
  { cat: "Complice", color: "#d4c5e2", text: "Chi dei due si è innamorato per primo?" },
  { cat: "Complice", color: "#d4c5e2", text: "Chi dei due ha fatto il primo passo?" },
  { cat: "Complice", color: "#d4c5e2", text: "Chi dei due pensa di avere sempre ragione?" },
  { cat: "Complice", color: "#d4c5e2", text: "Chi dei due è più geloso?" },
  { cat: "Complice", color: "#d4c5e2", text: "Chi dei due scrive più messaggi?" },
  { cat: "Complice", color: "#d4c5e2", text: "Chi dei due dice più “ti amo”?" },
  { cat: "Complice", color: "#d4c5e2", text: "Chi dei due cerca più coccole?" },
  { cat: "Complice", color: "#d4c5e2", text: "Chi dei due propone più cose da fare insieme?" },
  { cat: "Complice", color: "#d4c5e2", text: "Chi dei due pensa di amare di più? 😏" },
  { cat: "Complice", color: "#d4c5e2", text: "Chi dei due è più appiccicoso?" },
  
  // --- ROMANTICA ---
  { cat: "Romantica", color: "#ffb3c1", text: "Chi dei due ama di più l\'altro?" },
  { cat: "Romantica", color: "#ffb3c1", text: "Chi dei due rende l\'altro più felice?" },
  { cat: "Romantica", color: "#ffb3c1", text: "Chi dei due è più importante nella relazione? (trick 😏)" },
  { cat: "Romantica", color: "#ffb3c1", text: "Chi dei due ha cambiato di più la vita dell\'altro?" },
  { cat: "Romantica", color: "#ffb3c1", text: "Chi dei due è più fortunato ad avere l\'altro?" },
  { cat: "Romantica", color: "#ffb3c1", text: "Chi dei due pensa più spesso all\'altro?" },
  { cat: "Romantica", color: "#ffb3c1", text: "Chi dei due sente di aver trovato “casa”?" },
  { cat: "Romantica", color: "#ffb3c1", text: "Chi dei due non potrebbe stare senza l\'altro?" },
  
  // --- RICORDI ---
  { cat: "Ricordi", color: "#a8cce0", text: "Chi dei due si ricorda meglio le date importanti?" },
  { cat: "Ricordi", color: "#a8cce0", text: "Chi dei due parla più spesso del passato insieme?" },
  { cat: "Ricordi", color: "#a8cce0", text: "Chi dei due si emoziona di più ricordando?" },
  { cat: "Ricordi", color: "#a8cce0", text: "Chi dei due ha il ricordo preferito più bello?" },
  { cat: "Ricordi", color: "#a8cce0", text: "Chi dei due rivivrebbe tutto da capo?" },
  
  // --- SPICY ---
  { cat: "Spicy", color: "#ff8fab", text: "Chi dei due prende più iniziativa?" },
  { cat: "Spicy", color: "#ff8fab", text: "Chi dei due è più geloso (ma non lo ammette)?" },
  { cat: "Spicy", color: "#ff8fab", text: "Chi dei due è più passionale?" },
  { cat: "Spicy", color: "#ff8fab", text: "Chi dei due cede per primo dopo una lite?" },
  { cat: "Spicy", color: "#ff8fab", text: "Chi dei due guarda l\'altro più spesso?" },
  
  // --- DIFFICOLTÀ ---
  { cat: "Profonda", color: "#b5d6e8", text: "Chi dei due è più fortunato?" },
  { cat: "Profonda", color: "#b5d6e8", text: "Chi dei due dà di più nella relazione?" },
  { cat: "Profonda", color: "#b5d6e8", text: "Chi dei due ha fatto la scelta migliore?" },
  { cat: "Profonda", color: "#b5d6e8", text: "Chi dei due ha trovato qualcosa di raro?" },
  { cat: "Profonda", color: "#b5d6e8", text: "Chi dei due ha vinto davvero?" },
];

public static FEEDBACK_MESSAGES = [
  "Risposta corretta",
  "Non so se sono d\'accordo… ma ti amo lo stesso",
  "Sapevo avresti risposto così!",
  "Questa era scontata, ammettilo...",
  "Sei la mia conferma preferita",
  "Mmmh, su questa potremmo discuterne per ore..."
];

public static DESIDERI = [
  "Cena a lume di candela",
  "Vedere l'alba a Parigi",
  "Domenica di coccole e film",
  "Un weekend in una baita in montagna",
  "Giro in mongolfiera all'alba in Cappadocia",
  "Picnic sotto le stelle",
  "Viaggio on the road senza meta",
  "Corso di cucina insieme",
  "Viaggio ai castelli della Loira",
  "Bagno di mezzanotte al mare",
  "Vedere l'aurora boreale",
  "Una giornata intera alla SPA",
  "Matrimonio a sorpresa in chiesa",
  "Due biglietti per un concerto a sorpresa",
  "Weekend romantico in una città d'arte",
  "Una giornata a Disneyland insieme",
  "Un corso di ballo insieme",
  "Una giornata in un parco avventura",
  "Un picnic in un campo di lavanda",
  "Una giornata in un parco divertimenti",
  "Una giornata in un parco acquatico",
  "Due bellissimi figli insieme",
  "Una casa con vista mare",
  "Un viaggio in Giappone durante la fioritura dei ciliegi",
  "Una giornata in un vigneto con degustazione di vini",
  "Una mattina a fare colazione a letto insieme",
  "Una partita delle Roma allo stadio insieme",
  "Guardare un tramonto su una spiaggia deserta",
  "Dormire sotto le stelle in tenda",
  "Fare un viaggio improvvisato prenotato la sera prima",
  "Perderci insieme in una città sconosciuta",
  "Un brindisi su un rooftop con vista città",
  "Un capodanno solo noi due in un posto speciale",
  "Un weekend senza telefoni",
  "Scriverci lettere da rileggere tra 10 anni",
  "Un viaggio lungo un anno intorno al mondo",
  "Una cena cucinata insieme completamente da zero",
  "Un giorno intero senza orologi",
  "Un viaggio in Islanda tra ghiaccio e fuoco",
  "Un pomeriggio a costruire qualcosa insieme (anche male)",
  "Una giornata a guardare il mare senza fare nulla",
  "Una notte in un hotel di lusso a sorpresa",
  "Un viaggio in macchina cantando a squarciagola",
  "Una lista di sogni da spuntare insieme",
  "Un anniversario festeggiato in modo completamente folle",
  "Un viaggio in treno attraversando l\'Europa",
  "Una giornata di pioggia sotto le coperte",
  "Un film visto mille volte insieme",
  "Una cena improvvisata alle 2 di notte",
  "Un viaggio per vedere un posto che hai sempre sognato",
  "Una promessa mantenuta nel tempo",
  "Una casa piena di ricordi nostri",
  "Un brindisi per ogni traguardo raggiunto insieme",
  "Un giorno in cui dire: ne è valsa la pena",
  "Invecchiare insieme ridendo delle stesse cose",
  "Continuare a scegliere noi, ogni giorno"
];

public static COUPONS = [
    "Buono per una colazione a letto",
    "Buono per una serata cinema a casa",
    "Buono per un massaggio rilassante",
    "Buono per una cena romantica cucinata da me",
    "Buono per una giornata senza fare nulla insieme",
    "Buono per un picnic al parco",
    "Buono per una passeggiata mano nella mano",
    "Buono per un giorno di coccole e abbracci",
    "Buono per una serata a guardare le stelle",
    "Buono per un weekend fuori porta a sorpresa",
     "Buono per scegliere il prossimo ristorante",
  "Buono per una giornata senza telefono insieme",
  "Buono per una sorpresa improvvisata",
  "Buono per una serata pizza e film senza sensi di colpa",
  "Buono per una notte di chiacchiere infinite",
  "Buono per una giornata organizzata completamente da me",
  "Buono per un viaggio a sorpresa (anche piccolo)",
  "Buono per un gelato insieme quando vuoi tu",
  "Buono per una cena ordinata e zero sbatti",
  "Buono per una giornata da turisti nella nostra città",
  "Buono per una sfida a giochi (e perdi apposta 👀)",
  "Buono per una giornata in pigiama",
  "Buono per una serata romantica a sorpresa",
  "Buono per un abbraccio lungo quanto vuoi",
  "Buono per una giornata di relax totale",
  "Buono per scegliere cosa guardiamo per una settimana",
  "Buono per una foto ricordo insieme",
  "Buono per una playlist creata solo per te",
  "Buono per una cena fuori a sorpresa",
  "Buono per una giornata dedicata solo a noi",
  "Buono per un bacio in più ogni volta che lo vuoi",
  "Buono per una passeggiata senza meta",
  "Buono per una giornata senza sveglia",
  "Buono per una sorpresa che scoprirai sul momento",
  "Buono per una serata speciale organizzata da zero",
  "Buono per rifare il nostro primo appuntamento",
  "Buono per una notte speciale insieme",
  "Buono per una giornata di avventure improvvisate",
  "Buono per un momento solo nostro, quando ne hai bisogno",
  "Buono per realizzare uno dei tuoi desideri insieme"
];

public static REASONS = [
  "Amo il tuo sorriso, perché ha il potere di illuminare anche le mie giornate più buie.",
  "Amo il modo in cui mi guardi, come se fossi l'unica persona al mondo in mezzo alla folla.",
  "Perché tra le tue braccia mi sento al sicuro, come in un porto riparato da ogni tempesta.",
  "Per la tua dolcezza infinita, che riesce a smussare ogni mio angolo caratteriale.",
  "Per la tua forza silenziosa, quella che mi sostiene quando io mi sento fragile.",
  "Per la tua pazienza con cui sai aspettarmi, accogliendo ogni mio tempo e ogni mio silenzio.",
  "Per le tue risate contagiose, che sono la melodia preferita delle mie giornate.",
  "Per come riesci a farmi ridere di cuore, riportando la leggerezza anche dove non c'era.",
  "Amo il tuo cuore enorme, capace di contenere un amore così puro e disinteressato.",
  "Perché non importa cosa accada: so che sarai sempre lì, a un passo dal mio fianco.",
  "Per come mi capisci senza bisogno di parole, leggendo nei miei occhi quello che non dico.",
  "Perché sei il mio tifo più grande, la persona che crede in me anche quando io non lo faccio.",
  "Amo il modo in cui mi abbracci: è lì che ritrovo l'incastro perfetto con il mondo.",
  "Per le nostre conversazioni infinite, quelle che ci portano a scoprire mondi nuovi ogni volta.",
  "Per i nostri silenzi pieni di significato, dove la tua sola presenza dice già tutto.",
  "Per ogni singolo ricordo che abbiamo costruito, mattoni preziosi della nostra storia.",
  "Per tutti i ricordi che ancora dobbiamo creare, un libro bianco che non vedo l'ora di scrivere.",
  "Per come sei cresciuto camminando accanto a me, diventando la versione migliore di te stesso.",
  "Per come mi spingi a crescere, ispirandomi ogni giorno a superare i miei limiti.",
  "Perché sei un'anima rara e unica, un tesoro che ho avuto la fortuna di trovare.",
  "Perché sei speciale in ogni tuo piccolo gesto, anche in quelli che pensi passino inosservati.",
  "Perché sei semplicemente tu, con tutte le tue sfumature che ti rendono meraviglioso.",
  "Per la gentilezza d'animo che metti in tutto ciò che fai e verso chiunque incontri.",
  "Per il tuo modo di amare così profondo e autentico, che mi fa sentire la persona più fortunata.",
  "Perché hai questo dono magico: rendi ogni cosa più bella, solo facendone parte.",
  "Per la tua presenza costante, quel filo invisibile che mi tiene unito a te in ogni momento.",
  "Per l'incanto del nostro 'noi', uno spazio sacro dove siamo liberi di essere davvero noi stessi.",
  "Perché sei la mia casa: il luogo dell'anima dove posso finalmente abbassare ogni difesa.",
  "Perché, semplicemente e immensamente, sei e sarai sempre l\'amore della mia vita."
];

public static FORTUNE_ANSWERS = [
  "Le stelle dicono: assolutamente SÌ!",
  "Solo se mi dai un bacio prima...",
  "Dipende da quanta fame hai",
  "Il destino è incerto, riprova dopo una coccola.",
  "Sì, ma solo se decidiamo insieme",
  "Le nubi dicono di no, ma io dico di sì!",
  "Chiedilo di nuovo tra 5 minuti...",
  "Sì, e sarà bellissimo!",
  "Prospettive rosee all'orizzonte",
  "Non ora, sto sognando noi due...",
 "La risposta è sì, ma prima fammi un complimento!",
  "Tutto punta verso un 'Sì' clamoroso.",
  "Chiedilo al mio avvocato (cioè al gatto/cane).",
  "Se mi porti un bicchiere d'acqua, la risposta è sì.",
  "Segui il tuo cuore... che di solito mi porta da te.",
  "Le stelle sono pigre oggi, decidiamo noi sul divano?",
  "100% SÌ, senza ombra di dubbio!",
  "Meglio non dirtelo ora, preferisco sorprenderti...",
  "C'è un 99% di probabilità che accada. L'1% è pigrizia.",
  "Solo se prometti di non ridere!",
  "Certamente! Ma solo dopo l'episodio di stasera.",
  "È scritto nel destino (e nel mio cuore).",
  "Probabile, ma solo se mi abbracci forte.",
  "La sfera dice: 'Fallo e basta!'.",
  "Sì, ma solo se domani dormiamo fino a tardi.",
  "Risposta affermativa, capitano!",
  "Il futuro è luminoso, quasi quanto il tuo sorriso.",
  "Sì, ma ricorda che ho sempre ragione io!",
  "Certo! Anzi, facciamolo subito."
];

}
