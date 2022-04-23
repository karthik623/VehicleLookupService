CREATE DEFINER=`root`@`localhost` PROCEDURE `vehicleAddOrEdit`(
IN _registrationNumber int,
IN _vehicleMake VARCHAR(45),
IN _vehicleModel VARCHAR(45),
IN _vehicleVariant VARCHAR(45),
IN _registrationDate VARCHAR(45),
IN _manfactueYear VARCHAR(45),
IN _rtoCode VARCHAR(45),
IN _rtoLocation VARCHAR(45),
IN _fuelType VARCHAR(45),
IN _engineNo VARCHAR(45),
IN _chasisNo VARCHAR(45),
IN _individualOrOrganization VARCHAR(45),
IN _firstName VARCHAR(45),
IN _lastName VARCHAR(45),
IN _organizationName VARCHAR(45),
IN _permanentAddress VARCHAR(45),
IN _communicationAddress VARCHAR(45),
IN _phoneNumber VARCHAR(45),
IN _emailAddress VARCHAR(45),
IN _dateOfBirth VARCHAR(45),
IN _nomineeName VARCHAR(45),
IN _nomineeAge VARCHAR(45),
IN _nomineeRelationship VARCHAR(45),
IN _insuranceProvider VARCHAR(45),
IN _policyNumber VARCHAR(45),
IN _policyType VARCHAR(45),
IN _policyTerm VARCHAR(45),
IN _riskStartDate VARCHAR(45),
IN _riskEndDate VARCHAR(45)
)
BEGIN

INSERT INTO vehicledata(registrationNumber,vehicleMake,vehicleModel,
vehicleVariant,registrationDate,manfactueYear,rtoCode
,rtoLocation,fuelType,engineNo,chasisNo,individualOrOrganization,
firstName,lastName,organizationName,permanentAddress,
communicationAddress,phoneNumber,emailAddress,dateOfBirth,
nomineeName,nomineeAge,nomineeRelationship,insuranceProvider,policyNumber,
policyType,policyTerm,riskStartDate,riskEndDate)
VALUES (_registrationNumber,_vehicleMake,_vehicleModel,
_vehicleVariant,_registrationDate,_manfactueYear,_rtoCode
,_rtoLocation,_fuelType,_engineNo,_chasisNo,_individualOrOrganization,
_firstName,_lastName,_organizationName,_permanentAddress,
_communicationAddress,_phoneNumber,_emailAddress,_dateOfBirth,
_nomineeName,_nomineeAge,_nomineeRelationship,_insuranceProvider,_policyNumber,
_policyType,_policyTerm,_riskStartDate,_riskEndDate);
END