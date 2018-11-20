const getDataClusterized = ({data, nbOfCluster}) => {
  const output = [];
  for (let i = 0; i < nbOfCluster; i++) {
    output.push([]);
  }
  data.forEach(elem => {
    output[Math.floor(Math.random() * Math.floor(nbOfCluster))].push(elem);
  });
  return output;
};

const randHandler = msg => ({
  status: 200,
  body: JSON.stringify(getDataClusterized(JSON.parse(msg.body)))
});

module.exports = {randHandler};
