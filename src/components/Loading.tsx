import { HStack, Skeleton, Stack } from "@chakra-ui/react";

export default function Loading() {
  return (
    <HStack gap="5">
      <Stack flex="1">
        <Skeleton height="5" />
        <Skeleton height="5" width="80%" />
      </Stack>
    </HStack>
  );
}
