import axios from 'axios';

export class ContactService {
    static serverUrl = `http://localhost:9000`;

    static getAllContacts(){
        let dataUrl = `${this.serverUrl}/contatos`;
        return axios.get(dataUrl);

    }

/*     static getContact(contactId){
        let dataUrl = `${this.serverUrl}/contacts/${contactId}`;
        return axios.get(dataUrl);
    }
 */

    static createContact(contato){
        let dataUrl = `${this.serverUrl}/contatos`;
        return axios.post(dataUrl, contato);
    }


    static deleteContact(contactId){
        let dataUrl = `${this.serverUrl}/contatos/${contactId}`;
        return axios.delete(dataUrl);
    }


}



