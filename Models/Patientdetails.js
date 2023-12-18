const mongoose = require('mongoose')
const patientSchema = mongoose.Schema(

    {
        PatientId: String,
        Surname:String,
        OtherNames:String,
        Gender:String,
        PhoneNumber:String,
        ResidentialAddress:String,
        

    }

)

const emergencyDetails = mongoose.Schema(
    {
        EmergencyName:String,
       EmergencyContact:String,
       Relationship:String    }
)

const Patient= mongoose.model("Regular Patient",patientSchema);
const EmergencyPatient = mongoose.model("Emmergency Patient",emergencyDetails);
module.exports = Patient;
module.exports = EmergencyPatient;