import {APP_AK, APP_SK, APP_WO, APP_MT} from "@env";

const AK = APP_AK;
const SK = APP_SK;
const WO = APP_WO;
const proxy = "https://proxy-ewozx.herokuapp.com/";
const mongo = "https://ewozx-db.herokuapp.com/";
const MT = APP_MT;
const PRU = "shasta.1";// shasta1. para inhabilitar red de pruebas
const WS = "TPBiZcFPtmGiPBtjwysLqL4mnbto8NayC8";//T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb recibe los huerfanos por defecto
const descuento = 0.14;// 0.14 es el 14% que queda en la plataforma el restante osea el 86% para comprar wozx y repartir los referidos
const WOZX = 0.07; // para que el WOZX se Compre de inmediato
const TRX = 0.035; // para que el TRX se Venda de inmediato
const SC = "TNzD2WidirGVUfJPYN5aQsKa9KXMMQLMLn";// direccion del contrato
const USD = 100; // minimo de inversion en dolares USD (100)
const SD = 0.1; // 10% de sensibilidad para modificar el precio minimo de inversion
const EX = "TC4X6qXFotc2sLqLW4sFcq9NtJVgXp7gSf"; //wallet de of exchange

const RW = [0.05, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.01]; // niveles y recompensas de cada nivel

const MA = 100; //cantidad minima de tron permitida en la wallet de la aplicación

const CR = 50; // costo de registro en la plataforma trx

const CE = 40; // Cantidad extra de tron que hay que tener para cubrir gastos de energia

const FEEW = 0.5; //fee de retiro del wozx por la platafora de ethereum
const FEET = 10; //fee de retiro del Tron por medio del contrato

const withdrawl = 0.1; //10% de los retiros comision extra
const minWithdrawl = 150;

const habilitarRetirosContrato = false;

export default {
  AK, SK, WO,
   proxy, PRU,
    WS, descuento,
     MA, WOZX, TRX,
      SC, USD, SD, EX,
       FEEW, FEET,
        mongo, MT,
         CR, CE, RW,
          withdrawl, minWithdrawl,
          habilitarRetirosContrato
        };
