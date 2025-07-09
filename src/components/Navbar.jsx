import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logo from "../assets/enyxlogo.png";


const Links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Publications", path: "/publications" },
  { name: "Contact", path: "/contactus" },
];

const NavLink = ({ to, children }) => (
  <Link to={to}>
    <Button
      variant="ghost"
      _hover={{ bg: "gray.200" }}
      fontSize="lg"
      fontWeight="medium"
    >
      {children}
    </Button>
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="white" px={6} py={4} boxShadow="md" position="fixed" w="full" zIndex={100}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Link to="/">
        <Box flexShrink={0}>
          <img
            src={logo} 
            alt="Logo"
            style={{ height: "100px" }}
          />
        </Box>
        </Link>

        {/* Desktop Links */}
        <HStack
          as="nav"
          spacing={4}
          display={{ base: "none", md: "flex" }}
        >
          {Links.map((link) => (
            <NavLink key={link.name} to={link.path}>
              {link.name}
            </NavLink>
          ))}
        </HStack>

        {/* Hamburger Icon */}
        <IconButton
          size="lg"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile Menu */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.name} to={link.path}>
                {link.name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}