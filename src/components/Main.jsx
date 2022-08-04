import { Box, Text } from "@chakra-ui/react";
import Card from "./Card";

const Main = () => {

    return (
        <main>
            <Box w="100%" h={{base:"", lg:"100vh"}} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Box m={{base:"30px 0px 30px 0px", lg:"0"}}>
                    <h1 style={{ width: "90px", textAlign: "center" }}><Text style={{ color: "hsl(186, 14%, 43%)", fontSize: "25px", letterSpacing: "7px" }}>SPLITTER</Text></h1>
                </Box>
                <Card />
            </Box>
        </main>
    )
}

export default Main;