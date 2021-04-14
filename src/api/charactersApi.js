import request from "@/utils/request";

export function getCharactersApi(params) {
  return request({
    url: `/character/`,
    method: "get",
    params: params,
  });
}
