const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());

//Sql connection details
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'vehiclelookupservice',
    multipleStatements: true
    });
    mysqlConnection.connect((err)=> {
        if(!err)
        console.log('Connection Established Successfully');
        else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
        });



//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//Creating GET Router to fetch all the vehicle details from the MySQL Database
app.get('/get/vehicleregistrationnumber' , (req, res) => {
    mysqlConnection.query("SELECT * FROM vehicledata" , (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
    })
    } );


//Creating POST Router to post all the vehicle details to the MySQL Database 
app.post('/post/vehicleregistrationnumber', (req, res) => {
    let veh = req.body;
    var sql = " SET @registrationNumber = ?;SET @vehicleMake = ?;SET @vehicleModel = ?;SET @vehicleVariant = ?;SET @registrationDate = ?;SET @manfactueYear = ?;SET @rtoCode = ?;SET @rtoLocation = ?;SET @fuelType = ?;SET @engineNo = ?;SET @chasisNo = ?;SET @individualOrOrganization = ?;SET @firstName = ?;SET @lastName = ?;SET @organizationName = ?;SET @permanentAddress = ?;SET @communicationAddress = ?;SET @phoneNumber = ?;SET @emailAddress = ?;SET @dateOfBirth = ?;SET @nomineeName = ?;SET @nomineeAge = ?;SET @nomineeRelationship = ?;SET @insuranceProvider = ?;SET @policyNumber = ?;SET @policyType = ?;SET @policyTerm = ?;SET @riskStartDate = ?;SET @riskEndDate = ?; CALL vehicleAddOrEdit(@registrationNumber,@vehicleMake,@vehicleModel,@vehicleVariant,@registrationDate,@manfactueYear,@rtoCode,@rtoLocation,@fuelType,@engineNo,@chasisNo,@individualOrOrganization,@firstName,@lastName,@organizationName,@permanentAddress,@communicationAddress,@phoneNumber,@emailAddress,@dateOfBirth,@nomineeName,@nomineeAge,@nomineeRelationship,@insuranceProvider,@policyNumber,@policyType,@policyTerm,@riskStartDate,@riskEndDate);";
mysqlConnection.query(sql, [veh.registrationNumber,veh.vehicleMake,veh.vehicleModel,
    veh.vehicleVariant,veh.registrationDate,veh.manfactueYear,veh.rtoCode
    ,veh.rtoLocation,veh.fuelType,veh.engineNo,veh.chasisNo,veh.individualOrOrganization,veh.
    firstName,veh.lastName,veh.organizationName,veh.permanentAddress,
    veh.communicationAddress,veh.phoneNumber,veh.emailAddress,veh.dateOfBirth,
    veh.nomineeName,veh.nomineeAge,veh.nomineeRelationship,veh.insuranceProvider,veh.policyNumber,veh.policyType,veh.policyTerm,veh.riskStartDate,veh.riskEndDate], (err, rows, fields) => {
if (!err)
res.send('Data Added Sucessfully to Database');

else
console.log(err);
})
});