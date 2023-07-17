import React from 'react'
import { Avatar, Button, Box, Dialog, DialogContent, Stack, TextField, Card, CardContent, Typography } from '@mui/material'
import {firestore} from "../../service/firebase.js";

function header() {
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
  return (
    <div className='flex justify-between p-3 border-b-[2px] border-[#ff3366] bg-slate-900'>
      <div className='flex'> 
      <img src="./img/Untitled.png" className='h-12' alt='logo'/>
      <b className='text-[35px] text-serif text-white' >BTB Sport</b>
  

      </div>
      
      <div className='flex gap-8 pt-3'>
        <Button className='bg-[#ff3366] p-2 px-3 text-white h-min' size='sm' >Creat Posts</Button>
        <Button onClick={()=>setOpen(true)}
        className='bg-white text-gray-500 p-2 px-3 border-[1px] rounded-full h-min ' size='sm'>Sign in</Button>
           
            <Dialog open={open} onClose={() => setOpen(false)}>
                <form onSubmit={handleCreateUser}>
                    <DialogContent>
                        <Stack>
                        <TextField name="firstname" required width={450} placeholder="Firstname"/>
                        <TextField name="lastname" required width={450} placeholder="Last Name"/>
                        <TextField name="email" required type="email" width={450} placeholder="Email"/>
                        <TextField name="age" type="number" width={450} placeholder="Age"/>
                        <TextField name="education" width={450} placeholder="Education"/>
                        <Button type="submit" fullWidth variant="outlined">Submit</Button>
                        </Stack>
                    </DialogContent>
                </form>
            </Dialog>
            <Box size='sm'>
                {users.map((users, index) =>{
                    return(
                        <Card key={index} >
                        <CardContent>
                            <Typography>User: {users.firstName} {users.lastName}</Typography>
                        </CardContent>
                    </Card>
                    );
                })}
            </Box>

      </div>
      
    </div>
  )
}

export default header
