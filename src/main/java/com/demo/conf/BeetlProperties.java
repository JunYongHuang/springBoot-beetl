package com.demo.conf;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * beetl config file
 */
@ConfigurationProperties(prefix = BeetlProperties.BEETL_PREFIX)
public class BeetlProperties {

	public static final String BEETL_PREFIX = "beetl";

	private String root = "/templates/";

	private String chartset = "UTF-8";

	private String contentType = "text/html;charset=UTF-8";

	private String prefix = "";

	private String suffix = ".html";

	public String getRoot() {
		return root;
	}

	public void setRoot(String root) {
		this.root = root;
	}

	public String getContentType() {
		return contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public String getPrefix() {
		return prefix;
	}

	public void setPrefix(String prefix) {
		this.prefix = prefix;
	}

	public String getSuffix() {
		return suffix;
	}

	public void setSuffix(String suffix) {
		this.suffix = suffix;
	}

	public String getChartset() {
		return chartset;
	}

	public void setChartset(String chartset) {
		this.chartset = chartset;
	}

}
