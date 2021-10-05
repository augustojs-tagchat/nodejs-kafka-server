require("dotenv/config");
const { Kafka } = require("kafkajs");

const username = process.env.KAFKA_USERNAME;
const password = process.env.KAFKA_PW;
const sasl =
  username && password ? { username, password, mechanism: "plain" } : null;
const ssl = !!sasl;

// This creates a client instance that is configured to connect to the Kafka broker provided by
// the environment variable KAFKA_BOOTSTRAP_SERVER
const kafka = new Kafka({
  clientId: process.env.CLIENT_ID,
  brokers: [process.env.KAFKA_BROKER],
  ssl,
  sasl,
});

module.exports = kafka;
