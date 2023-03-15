import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Text,
} from "@chakra-ui/react";

export default function DrawerExample({ ...props }) {
  return (
    <Flex w={props.w}>
      <Drawer
        isOpen={props.isOpen}
        placement={props.placement}
        onClose={props.onClose}
        finalFocusRef={props.btnRef}>
        <DrawerOverlay />
        <DrawerContent alignItems='center'>
          <DrawerCloseButton alignSelf='end' mx={props.p} my={props.p} />

          <DrawerBody>{props.children}</DrawerBody>
          <DrawerFooter>{props.footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
