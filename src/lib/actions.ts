'use server';

import Mailgun from 'mailgun.js';
import { ActionState } from './definitions';

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY || '<a_mailgun_api_key>';
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || '';
const MAILGUN_RECIPIENT_ADDRESS = process.env.MAILGUN_RECIPIENT_ADDRESS || '';
const mailgun = new Mailgun(FormData);
const mailgunClient = mailgun.client({
  username: 'api',
  key: MAILGUN_API_KEY,
  url: 'https://api.eu.mailgun.net'
});

const DEFAULT_ERROR_MESSAGE =
  'Une erreur est apparue, merci de réessayer plus tard.';

export const sendPlanDemoEmail = async (data: {
  firstname: string;
  lastname: string;
  company: string;
  email: string;
  phone: string;
}): Promise<ActionState> => {
  return mailgunClient.messages
    .create(MAILGUN_DOMAIN, {
      from: `${data.firstname} ${data.lastname} <${data.email}>`,
      to: [MAILGUN_RECIPIENT_ADDRESS],
      subject: `Prise de contact démonstration - ${data.firstname} ${data.lastname}`,
      html: `
          <p>
            Bonjour,<br/>
            Une nouvelle demande de démonstration vient d'être soumise via le formulaire en ligne.
          </p>
  
          <p><b>Détails du contact :</b></p>
          <ul>
            <li>Nom : ${data.lastname}</li>
            <li>Prénom : ${data.firstname}</li>
            <li>Entreprise : ${data.company}</li>
            <li>Email : ${data.email}</li>
            <li>Téléphone : ${data.phone}</li>
          </ul>
  
          <p><b>Format de la démonstration :</b></p>
          <ul>
            <li>Session de 30 minutes en visioconférence</li>
            <li>Présentation personnalisée des produits</li>
          </ul>
        `
    })
    .then((success) => ({
      status: 'success' as const,
      response: success
    }))
    .catch((error) => ({
      status: 'error' as const,
      message: DEFAULT_ERROR_MESSAGE,
      response: error
    }));
};
