import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 5px;
    margin-top: 10px
`

export const Logo = (props) => {
  return (
    <Link href='/'>
        <LogoBox>
            <Image width={200} height={10} alt='logo'></Image>
        </LogoBox>
    </Link>
  )
}
