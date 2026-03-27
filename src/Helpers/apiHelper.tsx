import Mappings from "./Mappings";

export class apiHelper {
    static async fetchPin(): Promise<string> {
        const query: string = Mappings.pinAPIquery;
        try {
            const response = await fetch(query);   
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const decodedPin = atob(data.pin);          
            return decodedPin;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    static async fetchMessage(): Promise<string> {
        const query: string = Mappings.messageAPIquery;
        try {
            const response = await fetch(query);   
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

}   