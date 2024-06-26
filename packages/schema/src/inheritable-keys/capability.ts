import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/configuration/compatibility-dates
export const compatibilityDateSchema = z.enum([
  "2024-04-03",
  "2024-04-01",
  "2024-03-26",
  "2024-03-18",
  "2024-03-04",
  "2023-12-01",
  "2023-11-08",
  "2023-08-15",
  "2023-08-01",
  "2023-03-14",
  "2023-03-01",
  "2022-11-30",
  "2022-10-31",
  "2022-08-04",
  "2022-06-01",
  "2022-04-05",
  "2022-03-21",
  "2022-03-08",
  "2022-01-31",
  "2021-11-10",
  "2021-11-03",
]);

// ref: https://developers.cloudflare.com/workers/configuration/compatibility-dates/#compatibility-flags
export const compatibilityFlagsSchema = z.array(
  z.enum([
    "nodejs_compat",
    "brotli_content_encoding",
    "no_brotli_content_encoding",
    "rpc",
    "unwrap_custom_thenables",
    "no_unwrap_custom_thenables",
    "fetcher_no_get_put_delete",
    "fetcher_has_get_put_delete",
    "queues_json_messages",
    "no_queues_json_messages",
    "no_global_importscripts",
    "global_importscripts",
    "nodejs_als",
    "no_nodejs_als",
    "crypto_preserve_public_exponent",
    "no_crypto_preserve_public_exponent",
    "vectorize_query_metadata_optional",
    "vectorize_query_original",
    "web_socket_compression",
    "no_web_socket_compression",
    "strict_crypto_checks",
    "no_strict_crypto_checks",
    "strict_compression_checks",
    "no_strict_compression_checks",
    "response_redirect_url_standard",
    "response_redirect_url_original",
    "dynamic_dispatch_tunnel_exceptions",
    "dynamic_dispatch_treat_exceptions_as_500",
    "http_headers_getsetcookie",
    "no_http_headers_getsetcookie",
    "streams_enable_constructors",
    "streams_disable_constructors",
    "transformstream_enable_standard_constructor",
    "transformstream_disable_standard_constructor",
    "export_commonjs_default",
    "export_commonjs_namespace",
    "capture_async_api_throws",
    "do_not_capture_async_api_throws",
    "url_standard",
    "url_original",
    "r2_list_honor_include",
    "dont_substitute_null_on_type_error",
    "substitute_null_on_type_error",
    "minimal_subrequests",
    "no_minimal_subrequests",
    "global_navigator",
    "no_global_navigator",
    "no_cots_on_external_fetch",
    "cots_on_external_fetch",
    "workers_api_getters_setters_on_prototype",
    "workers_api_getters_setters_on_instance",
    "durable_object_fetch_requires_full_url",
    "durable_object_fetch_allows_relative_url",
    "fetch_refuses_unknown_protocols",
    "fetch_treats_unknown_protocols_as_http",
    "streams_byob_reader_detaches_buffer",
    "streams_byob_reader_does_not_detach_buffer",
    "formdata_parser_supports_files",
    "formdata_parser_converts_files_to_strings",
    "html_rewriter_treats_esi_include_as_void_tag",
  ]),
);
