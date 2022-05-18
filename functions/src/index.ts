import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

const app = admin.initializeApp();
const db = app.firestore();
const colIrregularidade = db.collection("irregularidades");


export const addIrregularidade = functions
    .region("southamerica-east1")
    .https.onRequest(async (request, response) => {
      const irregularidade = {
        data: request.body.data,
        imei: request.body.imei,
        placa: request.body.placa,
        foto1: request.body.foto1,
        foto2: request.body.foto2,
        foto3: request.body.foto3,
        foto4: request.body.foto4,
      };
      try {
        await colIrregularidade.add(irregularidade);
        response.send("salvo");
      } catch (e) {
        response.send("erro");
      }
    });
