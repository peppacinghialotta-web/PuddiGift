export class apiHelper {
    static async fetchPin(): Promise<string> {
        const query: string = "\\PuddiGift\\pin.json";
        try {
            const response = await fetch(query);   
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }


            const data = await response.json();
            const decodedPin = atob(data.pin);          
            return decodedPin;
        } catch (error) {
            console.error("Error fetching PIN:", error);
            throw error;
        }
    };

}   