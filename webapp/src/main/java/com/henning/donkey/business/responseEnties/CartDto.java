package com.henning.donkey.business.responseEnties;

public class CartDto
{
	private String uuid;
	private String name;

	public CartDto(){}

	public CartDto(String uuid, String name) {
		this.name = name;
		this.uuid = uuid;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
