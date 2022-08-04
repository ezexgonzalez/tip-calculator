import { Box, Text, InputGroup, InputLeftElement, Input, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";


const Card = () => {

    const [billState, setBillState] = useState("");
    const [peopleState, setPeopleState] = useState("");
    const [customState, setCustomState] = useState("");
    const [tipActiveState, setTipActiveState] = useState("");
    const [resultsState, setResultsState] = useState({
        tipAmount: "0.00",
        total: "0.00"
    });
    const [errors, setErrors] = useState({
        people: false
    })

    const peopleError = (state) => {
        if (state === 0) {
            setErrors(data => {
                return {
                    ...data,
                    people: true
                }
            })
        } else {
            setErrors(data => {
                return {
                    ...data,
                    people: false
                }
            })
        }
    }

    const handleBillOnChange = (e) => {
        if (/^[0-9.]{0,6}$/.test(e.target.value)) {
            setBillState(e.target.value);

        }
    }
    const handlePeopleOnChange = (e) => {
        if (/^[0-9]{0,2}$/.test(e.target.value)) {
            peopleError(Number(e.target.value));
            setPeopleState(e.target.value);
        }
    }

    const handleTip = (e) => {
        if (/^[0-9]{0,3}$/.test(e.target.value)) {
            setCustomState(e.target.value)
            setTipActiveState(Number(e.target.value));
        }
    }
    
    const resetStates = () =>{
        setBillState("");
        setCustomState("");
        setPeopleState("");
        setTipActiveState("");
        setResultsState({
            tipAmount: "0.00",
            total: "0.00"
        });
        setErrors({
            people: false
        });
    }

    useEffect(() => {
        if (billState > 0 && tipActiveState > 0 && peopleState > 0) {
            setResultsState(data => {
                return {
                    tipAmount: (((Number(billState) * Number(tipActiveState)) / 100) / Number(peopleState)).toFixed(2),
                    total: ((Number(billState) / Number(peopleState)) + ((Number(billState) * Number(tipActiveState)) / 100) / Number(peopleState)).toFixed(2)

                }
            })
        }
    }, [billState, peopleState, customState, tipActiveState])

    return (
        <Box bg="white" display="flex" borderRadius={{ base: "20px 20px 0px 0px", lg: "20px" }} p="30px" m={{ base: "0", lg: "50px 0px 0px 0px" }} flexDirection={{ base: "column", lg: "unset" }} alignItems={{ base: "center", lg: "normal" }} w={{ base: "100%", lg: "900px" }} h={{ base: "", lg: "450px" }} color="hsl(183, 100%, 15%)">
            <Box w={{ base: "100%", lg: "50%" }} display="flex" p={{ base: "15px 10px 20px 10px", lg: "15px 40px 20px 10px" }} flexDirection="column">
                <Text m="0px 0px 5px 0px" color="hsl(186, 14%, 43%)" fontSize="17px">Bill</Text>
                <InputGroup bg="hsl(189, 41%, 97%)" borderRadius="5px">
                    <InputLeftElement
                        pointerEvents='none'
                        color='hsl(184, 14%, 56%)'
                        fontSize='24px'
                        children='$'
                        h="100%"
                    />
                    <Input placeholder='0' onChange={handleBillOnChange} value={billState} _focus={{ border: "2px solid hsl(172, 67%, 45%)", boxShadow: "none" }} color="hsl(183, 100%, 15%)" h="50px" fontSize="24px" textAlign="end" _placeholder={{ color: "hsl(184, 14%, 56%)" }} />
                </InputGroup>
                <Text m="30px 0px 10px 0px" color="hsl(186, 14%, 43%)" fontSize="17px">Select Tip %</Text>
                <Box display="flex" flexWrap="wrap" gap={{ base: "15px", lg: "10px" }}>
                    <Button onClick={(e) => setTipActiveState(e.target.value)} bg="hsl(183, 100%, 15%)" _active={{ bg: "hsl(172, 67%, 45%)", color: "hsl(183, 100%, 15%)" }} isActive={tipActiveState === "5" ? true : false} value="5" _hover={{ bg: "hsl(185, 41%, 84%)", color: "hsl(183, 100%, 15%)" }} fontSize="24px" h="45px" w={{base:"45%", lg:"115px"}} color="hsl(0, 0%, 100%)">5%</Button>
                    <Button onClick={(e) => setTipActiveState(e.target.value)} bg="hsl(183, 100%, 15%)" _active={{ bg: "hsl(172, 67%, 45%)", color: "hsl(183, 100%, 15%)" }} isActive={tipActiveState === "10" ? true : false} value="10" _hover={{ bg: "hsl(185, 41%, 84%)", color: "hsl(183, 100%, 15%)" }} fontSize="24px" h="45px" w={{base:"45%", lg:"115px"}}  color="hsl(0, 0%, 100%)">10%</Button>
                    <Button onClick={(e) => setTipActiveState(e.target.value)} bg="hsl(183, 100%, 15%)" _active={{ bg: "hsl(172, 67%, 45%)", color: "hsl(183, 100%, 15%)" }} isActive={tipActiveState === "15" ? true : false} value="15" _hover={{ bg: "hsl(185, 41%, 84%)", color: "hsl(183, 100%, 15%)" }} fontSize="24px" h="45px" w={{base:"45%", lg:"115px"}}  color="hsl(0, 0%, 100%)">15%</Button>
                    <Button onClick={(e) => setTipActiveState(e.target.value)} bg="hsl(183, 100%, 15%)" _active={{ bg: "hsl(172, 67%, 45%)", color: "hsl(183, 100%, 15%)" }} isActive={tipActiveState === "25" ? true : false} value="25" _hover={{ bg: "hsl(185, 41%, 84%)", color: "hsl(183, 100%, 15%)" }} fontSize="24px" h="45px" w={{base:"45%", lg:"115px"}}  color="hsl(0, 0%, 100%)">25%</Button>
                    <Button onClick={(e) => setTipActiveState(e.target.value)} bg="hsl(183, 100%, 15%)" _active={{ bg: "hsl(172, 67%, 45%)", color: "hsl(183, 100%, 15%)" }} isActive={tipActiveState === "50" ? true : false} value="50" _hover={{ bg: "hsl(185, 41%, 84%)", color: "hsl(183, 100%, 15%)" }} fontSize="24px" h="45px" w={{base:"45%", lg:"115px"}}  color="hsl(0, 0%, 100%)">50%</Button>
                    <Input h="45px"  w={{base:"45%", lg:"115px"}} bg="hsl(189, 41%, 97%)" value={customState} onChange={handleTip} borderRadius="5px" placeholder="Custom" fontSize="24px" p="10px" textAlign="end" _placeholder={{ color: "hsl(184, 14%, 56%)" }} />
                </Box>
                <Box display="flex" w="100%" justifyContent="space-between">
                    <Text m="20px 0px 0px 0px" color="hsl(186, 14%, 43%)" fontSize="17px">Number of People</Text>
                    {
                        errors.people ? <Text m="20px 0px 0px 0px" color="#DB3A34">Can't be zero</Text> : null
                    }
                </Box>
                <InputGroup bg="hsl(189, 41%, 97%)" borderRadius="5px">
                    <InputLeftElement
                        pointerEvents='none'
                        color='hsl(184, 14%, 56%)'
                        fontSize='24px'
                        children={<FaUser style={{ width: "15px" }} />}
                        h="100%"
                    />
                    <Input onChange={handlePeopleOnChange} value={peopleState} outline={errors.people ? "2px solid #DB3A34" : "none"} placeholder='0' _focus={{ border: errors.people ? "none" : "2px solid hsl(172, 67%, 45%)", boxShadow: "none" }} color="hsl(183, 100%, 15%)" h="50px" fontSize="24px" textAlign="end" _placeholder={{ color: "hsl(184, 14%, 56%)" }} />
                </InputGroup>

            </Box>
            <Box w={{ base: "100%", lg: "50%" }} bg="hsl(183, 100%, 15%)" overflow="hidden" p="40px" display="flex" flexDirection="column" borderRadius="20px">
                <Box margin="10px 0px 0px 0px" alignItems="center" justifyContent="space-between" display="flex">
                    <Box display="flex" flexDir="column">
                        <Text color="white">Tip Amount</Text>
                        <Text fontSize="15px" color="hsl(184, 14%, 56%)">/ person</Text>
                    </Box>
                    <Text fontSize={{ base: "30px", lg: "50px" }} color="hsl(172, 67%, 45%)">${resultsState.tipAmount}</Text>
                </Box>
                <Box margin="20px 0px 0px 0px" alignItems="center" justifyContent="space-between" display="flex">
                    <Box display="flex" flexDir="column">
                        <Text color="white">Total</Text>
                        <Text fontSize="15px" color="hsl(184, 14%, 56%)">/ person</Text>
                    </Box>
                    <Text fontSize={{ base: "30px", lg: "50px" }} color="hsl(172, 67%, 45%)">${resultsState.total}</Text>
                </Box>
                <Button onClick={resetStates} disabled={billState || peopleState || customState || tipActiveState ? false : true} mt={{base:"30px", lg:"auto"}} bg={"hsl(172, 67%, 45%)"} _hover={{ bg: "hsl(185, 41%, 84%)" }}>RESET</Button>
            </Box>
        </Box>
    )

}


export default Card;