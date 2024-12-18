import React from "react";
import { useParams } from "react-router";

export default function EventDetailPage() {
  const param = useParams();
  return <div>detail for {param.id}</div>;
}
