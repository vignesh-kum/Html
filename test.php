 <?php 
$message= '';
if(isset($_POST['submit'])){
error_reporting(E_ERROR | E_WARNING | E_PARSE);

// include("index.html?q=sucess");
// Receiving variables
@$pfw_ip= $_SERVER['REMOTE_ADDR'];
@$date = date('l jS F Y h:i:s A');
extract($_REQUEST);



//Sending Email to form owner
$pfw_header = "From: $email\n"
  . "Reply-To: $email\n";
$pfw_subject = "Enquiry from Website Macroid App Services Pvt Ltd";
$pfw_email_to = "sivashankaricse3@gmail.com";
$pfw_message = "Visitor's IP: $pfw_ip\n"
."Name: $name\n"
."Mail: $email\n"
."Phone: $subject\n"
."Message: $message\n";

@mail($pfw_email_to, $pfw_subject ,$pfw_message ,$pfw_header) ;
$message='set';
header('Location: index.html');
}
?>
