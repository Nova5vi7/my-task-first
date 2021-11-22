const normalizeData = (data) => Number.isInteger(data) ? `${data}.00$` : `${data}$`;

export default normalizeData;