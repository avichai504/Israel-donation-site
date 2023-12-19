const { spawn } = require('child_process')
const path = require('path');

const calculator = (req, res) => {
  const { num1, num2 } = req.query;
  const scriptPath = path.join(__dirname, '../python_scripts/calculator.py');
  const pythonProcess = spawn('python', [scriptPath, num1, num2]);

  pythonProcess.stdout.on('data', (data) => {
    res.send(data.toString())
  })

  pythonProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`)
    res.status(500).send('Error occurred')
  })
}

module.exports = {
  calculator,
}