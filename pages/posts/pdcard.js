import { Box, Button, CardContent, Typography, Card, Dialog, DialogContent, Stack, TextField, Container, Avatar} from "@mui/material";
import React from "react";
import {firestore} from "../service/firebase.js";


export default function Home(){
    const [users,setUsers]=React.useState([]);
    const [open, setOpen] = React.useState(false);

    function handleCreateUser(event){
        event.preventDefault();
        const form = event.target;
        firestore
        .collection("users")
        .add({
          firstName:form.firstname.value,
          lastName:form.lastname.value,
          email: form.email.value,
          age: form.age.value,
          education: form.education.value,
        })
        .then((res) => {
          console.log("success sending data", res);
          event.target.reset();
          setOpen(false);
        })
        .catch((err) => {
          console.log("Error sending data")
        });
      }

      React.useEffect(()=>{
        firestore.collection("users").onSnapshot((snapshot) => {
            let _user = snapshot.docs.map((item) => {
                return{
                    id: item.id,
                    ...item.data(),
                };
            });
            setUsers(_user);
            console.log(_user);
        });
      },[])

    return(
        <Box>
            <Container sx={{display: "inline-block",   backgroundColor: "lightblue", width:"200px",height:"100px"}}>
            <Avatar/>
            <h1 style={{fontFamily:'fantasy'}}>Player</h1>
            </Container >

            
            <Button 
            onClick={()=>setOpen(true)}
            variant="contained"
            sx={{marginLeft: "95%"}}>Sign Up</Button>
            <Box>
                {users.map((users, index) =>{
                    return(
                        <Card>
                        <CardContent>
                            <Typography>User: {users.firstName} {users.lastName}</Typography>
                            <Typography>Email: {users.email}</Typography>
                            <Typography>Age: {users. age}</Typography>
                            <Typography>Education: {users. education}</Typography>
                        </CardContent>
                    </Card>
                    );
                })}
            </Box>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <form onSubmit={handleCreateUser}>
                    <DialogContent>
                        <Stack>
                        <TextField name="firstname" required width={450} placeholder="Firstname"/>
                        <TextField name="lastname" required width={450} placeholder="Last Name"/>
                        <TextField name="email" required type="email" width={450} placeholder="Email"/>
                        <TextField name="age" type="number" width={450} placeholder="Age"/>
                        <TextField name="education" width={450} placeholder="Education"/>
                        <Button type="submit" fullWidth variant="contained">Submit</Button>
                        </Stack>
                    </DialogContent>
                </form>
            </Dialog>
            <Box sx={{
            backgroundColor: "lightblue", 
            width:"100%",
            height:"100px",
        }}>

        </Box>
        </Box>
        
    )
}