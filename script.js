function findGift() {
    const recipient = document.getElementById("recipient").value;
    const budget = document.getElementById("budget").value;

    // Beispielhafte Geschenkideen-Datenbank
    const gifts = [
        { name: "Personalisierte Tasse", price: 15 },
        { name: "Bluetooth Lautsprecher", price: 40 },
        { name: "Gutschein für ein Restaurant", price: 60 },
        { name: "Kuscheldecke", price: 25 },
        { name: "Schmuckstück", price: 100 },
    ];

    // Geschenk passend zum Budget auswählen
    const filteredGifts = gifts.filter(gift => gift.price <= budget);
    const randomGift = filteredGifts[Math.floor(Math.random() * filteredGifts.length)];

    // Ergebnis anzeigen
    const suggestionElement = document.getElementById("suggestion");
    if (randomGift) {
        suggestionElement.innerHTML = `Für ${recipient}: ${randomGift.name} (${randomGift.price}€)`;
    } else {
        suggestionElement.innerHTML = "Keine passenden Geschenkideen gefunden. Bitte Budget erhöhen!";
    }
}
